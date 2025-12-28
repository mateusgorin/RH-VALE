
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden bg-white">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rhPrimary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-[-5%] w-[300px] h-[300px] bg-rhSecondary/5 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          
          {/* Lado Esquerdo: Conteúdo - 55% de largura para dar destaque ao título */}
          <div className="lg:w-[55%] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-rhPrimary/5 text-rhPrimary text-xs font-bold mb-8 tracking-[0.2em] uppercase border border-rhPrimary/10">
              <span className="w-2 h-2 bg-rhSecondary rounded-full animate-pulse"></span>
              Mentoria Estratégica de Carreira
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-rhPrimary leading-[1.1] mb-8 font-display">
              Sua carreira exige um <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rhPrimary to-rhSecondary">Posicionamento de Elite.</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A RH VALE não apenas refaz currículos; nós construímos sua autoridade no mercado para que as melhores empresas venham até você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-10 py-5 bg-rhPrimary text-white rounded-2xl font-bold shadow-[0_20px_40px_rgba(44,34,95,0.3)] hover:bg-rhSecondary hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-3"
              >
                Começar minha aceleração
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="#services" 
                className="px-10 py-5 border-2 border-rhPrimary/10 text-rhPrimary rounded-2xl font-bold hover:bg-rhLight transition-all text-lg flex items-center justify-center"
              >
                Conhecer o Método
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-12">
              <div>
                <p className="text-2xl font-bold text-rhPrimary">+500</p>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Recolocados</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-rhPrimary">98%</p>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Aprovação</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-rhPrimary">3x</p>
                <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Mais rápido</p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Imagem - Ajustado com margem esquerda levemente maior (lg:ml-20) */}
          <div className="lg:w-[45%] flex justify-center lg:justify-start relative">
            <div className="relative z-10 w-full max-w-md lg:ml-20">
              {/* Moldura Flutuante */}
              <div className="absolute -inset-4 border-2 border-rhPrimary/5 rounded-[40px] -rotate-3 z-0"></div>
              <div className="absolute -inset-4 border-2 border-rhSecondary/10 rounded-[40px] rotate-3 z-0"></div>
              
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-white p-2">
                <img 
                  src="https://i.postimg.cc/tCsSGgNH/kennifevale-20251228-0004.jpg" 
                  alt="Kennife Vale - Consultora" 
                  className="w-full h-auto object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
