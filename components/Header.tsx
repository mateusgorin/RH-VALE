
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Função de navegação com proteção extra contra quebras de página
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Interrompe o comportamento padrão do navegador que pode causar "pulos"
    e.preventDefault();
    e.stopPropagation();
    
    closeMenu();

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Pequeno timeout para garantir que o menu mobile fechou totalmente antes do scroll
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Atualiza a URL sem causar recarregamento ou pulo
        window.history.pushState(null, '', href);
      }, 10);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Kennife Vale', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a 
            href="#home" 
            className="flex items-center" 
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <img 
              src="https://i.postimg.cc/PJTpHy7c/1766928307551.png" 
              alt="RH VALE Logo" 
              className="h-14 md:h-16 w-auto object-contain hover:scale-105 transition-transform"
            />
          </a>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8 text-rhPrimary font-bold">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-rhSecondary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rhSecondary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex bg-rhPrimary text-white px-8 py-3 rounded-2xl font-bold hover:bg-rhSecondary transition-all shadow-[0_10px_20px_rgba(44,34,95,0.2)] active:scale-95 items-center gap-2"
          >
            Agendar Mentoria
          </a>

          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-rhPrimary hover:bg-gray-100 rounded-lg transition-colors z-[70] relative"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-rhPrimary/95 backdrop-blur-xl" onClick={closeMenu}></div>
        
        <nav className={`relative flex flex-col items-center justify-center h-full gap-8 p-8 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-10'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white text-3xl font-bold hover:text-rhSecondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-rhPrimary px-10 py-5 rounded-2xl font-extrabold shadow-2xl mt-4 flex items-center gap-3 text-xl"
            onClick={closeMenu}
          >
             Agendar Mentoria
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
