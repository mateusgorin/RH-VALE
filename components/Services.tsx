
import React from 'react';

const ServiceItem: React.FC<{ number: string, title: string; description: string; icon: React.ReactNode }> = ({ number, title, description, icon }) => (
  <div className="relative group p-8 rounded-3xl hover:bg-rhPrimary transition-all duration-500 hover:shadow-2xl">
    <div className="text-6xl font-black text-gray-50 absolute top-4 right-8 group-hover:text-white/5 transition-colors">{number}</div>
    <div className="relative z-10">
      <div className="w-16 h-16 bg-rhLight rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:text-white transition-all text-rhPrimary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-rhPrimary mb-4 group-hover:text-white transition-colors font-display">{title}</h3>
      <p className="text-gray-500 leading-relaxed group-hover:text-white/70 transition-colors">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Diagnóstico & Estratégia",
      description: "Mapeamos suas competências e definimos os alvos certos para sua senioridade e pretensão salarial.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Currículo de Alto Impacto",
      description: "Criação de documentos focados em resultados, otimizados para leitura humana e por sistemas de IA (ATS).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "LinkedIn Magnético",
      description: "Transformamos seu perfil em uma vitrine que atrai as vagas antes mesmo de elas serem publicadas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Simulação de Seleção",
      description: "Treinamento intensivo para entrevistas, ensinando você a responder perguntas difíceis com maestria.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-rhPrimary mb-6 font-display">
              Nosso Método de <br /> <span className="text-rhSecondary">Alta Performance.</span>
            </h2>
            <p className="text-lg text-gray-500">
              Uma abordagem completa, do planejamento estratégico à negociação do salário.
            </p>
          </div>
          <div className="pb-2">
            <div className="h-1 w-32 bg-rhPrimary"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
