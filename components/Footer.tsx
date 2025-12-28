
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden text-white pt-16 pb-10">
      {/* Arte de Fundo com as cores solicitadas */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: 'linear-gradient(135deg, #2c225f 0%, #44397d 100%)' 
        }}
      >
        {/* Elementos Artísticos Abstratos */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#44397d] blur-[100px] opacity-60"></div>
        <div className="absolute top-1/4 -left-20 w-48 h-48 rounded-full bg-[#2c225f] blur-[80px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start text-center md:text-left border-b border-white/10 pb-12">
          
          {/* Coluna Texto Logo e Descrição */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            {/* Logo em Texto - Estilizado com Fredoka One conforme solicitado */}
            <div className="mb-8 transform hover:scale-105 transition-transform cursor-default select-none">
              <span className="text-4xl md:text-5xl text-white font-logo">
                Kennife <span className="text-white/60">Vale</span>
              </span>
            </div>
            
            <p className="text-white/80 max-w-sm text-base leading-relaxed mb-8">
              Sua parceira estratégica para o sucesso profissional. Aceleramos sua recolocação com metodologia comprovada e posicionamento de elite no mercado.
            </p>

            {/* Social & Contact Icons Group - Unificados */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <a 
                href="https://www.linkedin.com/in/kennifevale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-rhPrimary transition-all duration-300 border border-white/10"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/kennifevale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-rhPrimary transition-all duration-300 border border-white/10"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-rhPrimary transition-all duration-300 border border-white/10"
                title="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.499-5.688-1.447l-6.309 1.655zm6.357-3.872l.45.267c1.535.911 3.3 1.391 5.105 1.391 5.454 0 9.893-4.439 9.893-9.892 0-2.646-1.03-5.132-2.9-7c-1.87-1.868-4.359-2.898-7-2.898-5.454 0-9.894 4.439-9.894 9.892 0 2.031.531 4.016 1.538 5.755l.297.514-1.116 4.073 4.172-1.091zm9.109-5.405c-.256-.128-1.516-.748-1.751-.833-.235-.085-.405-.128-.574.128-.169.256-.653.833-.801 1.002-.148.169-.296.191-.551.064-.256-.128-1.077-.397-2.051-1.267-.758-.677-1.269-1.513-1.418-1.769-.148-.256-.016-.395.112-.522.115-.114.256-.298.384-.447.128-.149.171-.256.256-.426.085-.17.043-.32-.021-.448-.064-.128-.574-1.385-.786-1.897-.206-.499-.416-.431-.574-.439l-.489-.007c-.169 0-.445.064-.678.32-.233.256-.889.874-.889 2.132 0 1.258.916 2.473 1.042 2.644.128.17 1.803 2.753 4.368 3.859.61.263 1.087.42 1.458.538.613.195 1.171.167 1.611.102.49-.072 1.516-.619 1.729-1.215.213-.597.213-1.11.149-1.215-.064-.106-.235-.17-.491-.298z"/>
                </svg>
              </a>
              <a 
                href="mailto:contato@rhvale.com.br" 
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-rhPrimary transition-all duration-300 border border-white/10"
                title="E-mail"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Coluna Navegação */}
          <div className="flex flex-col space-y-6">
            <h5 className="font-bold text-lg uppercase tracking-widest text-white/50">Explorar</h5>
            <ul className="space-y-4 text-white/80 font-medium">
              <li><a href="#home" className="hover:text-white hover:translate-x-1 transition-all inline-block">Início</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Nossos Serviços</a></li>
              <li><a href="#about" className="hover:text-white hover:translate-x-1 transition-all inline-block">Kennife Vale</a></li>
              <li><a href="#tips" className="hover:text-white hover:translate-x-1 transition-all inline-block">Dicas de Carreira</a></li>
            </ul>
          </div>
          
          {/* Coluna Contato Detalhado */}
          <div className="flex flex-col space-y-6">
            <h5 className="font-bold text-lg uppercase tracking-widest text-white/50">Contato</h5>
            <ul className="space-y-5 text-white/80 font-medium">
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:contato@rhvale.com.br" className="hover:text-white transition-colors text-sm">contato@rhvale.com.br</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+5511999999999" className="hover:text-white transition-colors text-sm">(11) 99999-9999</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
            <p>© 2025 Kennife Vale. Todos os direitos reservados.</p>
            <span className="hidden md:inline w-1 h-1 bg-white/20 rounded-full"></span>
            <p className="flex items-center gap-2">
              Desenvolvido por 
              <a 
                href="https://www.gorinsolucoes.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-all underline decoration-white/10 underline-offset-4"
              >
                Gorin Soluções
              </a>
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
