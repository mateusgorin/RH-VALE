
import React from 'react';

const InterviewTips: React.FC = () => {
  return (
    <section id="tips" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 bg-rhPrimary rounded-[48px] p-8 md:p-16 text-white relative shadow-2xl">
          {/* Overlay Decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rhSecondary rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <div className="inline-block py-1 px-3 rounded-lg bg-white/10 text-white text-xs font-bold mb-6 uppercase tracking-widest border border-white/20">
              Estratégia de Performance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display leading-snug">
              Dominando a <br />
              <span className="text-rhPrimary bg-white px-3 py-1 rounded-xl inline-block mt-2">Entrevista</span> de Seleção
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              A entrevista não é um interrogatório, é uma reunião de negócios onde você é o consultor. Aprenda a dominar o palco e ser o candidato inesquecível.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: "Storytelling Estratégico", desc: "Aprenda a contar suas conquistas com começo, meio e impacto quantificável." },
                { title: "Comunicação Não-Verbal", desc: "Sua postura e tom de voz comunicam mais do que suas palavras." },
                { title: "Perguntas de Alto Valor", desc: "O que perguntar ao recrutador para demonstrar senioridade e interesse." }
              ].map((tip, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-white border border-white/20">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{tip.title}</h4>
                    <p className="text-white/60 text-sm">{tip.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-rhPrimary px-8 py-4 rounded-2xl font-bold hover:bg-rhSecondary hover:text-white transition-all shadow-xl"
              >
                Quero treinar minha entrevista
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10 group">
              <img 
                src="https://i.postimg.cc/vBHjgFCZ/kennifevale-20251228-0014.jpg" 
                alt="Kennife Vale - Dicas de Entrevista" 
                className="w-full h-auto object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rhPrimary/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewTips;
