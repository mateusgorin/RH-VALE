
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-rhLight relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[48px] p-8 md:p-16 lg:p-20 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            
            {/* Lado Esquerdo: Texto */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="relative inline-block mb-8">
                <h2 className="text-5xl md:text-6xl font-bold text-rhPrimary relative z-10 font-display">Kennife Vale</h2>
                <div className="absolute -bottom-2 -right-4 w-full h-4 bg-rhSecondary/10 z-0"></div>
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                <p className="text-2xl font-semibold text-rhPrimary leading-tight border-l-4 border-rhSecondary pl-6 py-2">
                  "Minha missão é encurtar a distância entre o seu talento e a cadeira que você deseja ocupar."
                </p>
                <p>
                  Com anos de experiência no coração do RH, eu entendo os códigos invisíveis dos processos seletivos. Eu ajudo profissionais a pararem de "tentar a sorte" e começarem a dominar o jogo da recolocação.
                </p>
                <p>
                  Não entrego apenas um currículo; entrego uma nova postura profissional que impõe respeito e desperta o interesse imediato dos recrutadores.
                </p>
              </div>

              {/* Grid de Expertise - Uniformizado */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-4 py-5 px-6 bg-rhLight rounded-2xl border border-gray-100 hover:border-rhPrimary/20 transition-colors">
                  <div className="w-12 h-12 flex-shrink-0 bg-rhPrimary rounded-xl flex items-center justify-center text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>
                  </div>
                  <div>
                    <p className="font-bold text-rhPrimary">Expertise RH</p>
                    <p className="text-sm text-gray-400">Visão de Recrutadora</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 py-5 px-6 bg-rhLight rounded-2xl border border-gray-100 hover:border-rhSecondary/20 transition-colors">
                  <div className="w-12 h-12 flex-shrink-0 bg-rhSecondary rounded-xl flex items-center justify-center text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                     </svg>
                  </div>
                  <div>
                    <p className="font-bold text-rhPrimary">Resultados</p>
                    <p className="text-sm text-gray-400">Mentoria Pragmática</p>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:contato@rhvale.com.br"
                  className="flex items-center gap-3 px-8 py-4 bg-rhPrimary text-white rounded-xl font-bold hover:bg-rhSecondary transition-all shadow-md active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enviar E-mail
                </a>
                <a 
                  href="tel:+5511999999999"
                  className="flex items-center gap-3 px-8 py-4 border-2 border-rhPrimary text-rhPrimary rounded-xl font-bold hover:bg-rhLight transition-all active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ligar Agora
                </a>
              </div>
            </div>

            {/* Lado Direito: Imagem */}
            <div className="lg:w-1/2 flex items-center justify-center lg:justify-end">
               <div className="relative w-full max-w-sm group">
                  {/* Elemento de fundo decorativo */}
                  <div className="absolute -inset-6 bg-rhPrimary/5 rounded-[48px] blur-3xl group-hover:bg-rhPrimary/10 transition-all duration-700"></div>
                  
                  <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                    <img 
                      src="https://i.postimg.cc/WpDnz1hv/kennifevale-20251228-0015.jpg" 
                      alt="Kennife Vale - Perfil Profissional" 
                      className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Badge de Destaque atualizado */}
                  <div className="absolute -bottom-6 -right-6 bg-rhPrimary p-6 rounded-3xl text-white shadow-2xl hidden md:block border-4 border-white">
                     <p className="text-2xl font-bold mb-1">Recolocação</p>
                     <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Estratégia e Posicionamento</p>
                  </div>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
