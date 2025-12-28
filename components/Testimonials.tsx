
import React from 'react';

const TestimonialCard: React.FC<{ name: string; role: string; content: string }> = ({ name, role, content }) => (
  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    
    <div className="relative mb-6">
      <svg className="absolute -top-4 -left-2 w-8 h-8 text-rhSecondary/10 fill-current" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3H10V15C10 18.3137 7.31371 21 4 21H3Z" />
      </svg>
      <p className="text-gray-600 italic leading-relaxed relative z-10">
        "{content}"
      </p>
    </div>
    
    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center gap-4">
      <div className="w-12 h-12 bg-rhPrimary/5 rounded-full flex items-center justify-center font-bold text-rhPrimary">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-bold text-rhPrimary leading-none mb-1">{name}</h4>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mariana Silva",
      role: "Gerente de Projetos",
      content: "A mentoria da Kennife mudou meu jogo. Em menos de 20 dias, recebi 3 convites para entrevista em empresas que eu sempre sonhei. O currículo estratégico faz toda a diferença!"
    },
    {
      name: "Ricardo Oliveira",
      role: "Especialista em TI",
      content: "Eu estava estagnado há meses. Após o ajuste no LinkedIn e o treino de entrevista, consegui minha transição de carreira com um aumento salarial de 35%. Impecável!"
    },
    {
      name: "Beatriz Santos",
      role: "Coordenadora de RH",
      content: "Como profissional da área, posso dizer: a metodologia da RH VALE é o que há de mais moderno. Ela entende exatamente o que os recrutadores buscam."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-rhLight/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rhPrimary mb-6 font-display">
            A Voz de Quem <br />
            <span className="text-rhSecondary">Acelerou Conosco</span>
          </h2>
          <p className="text-lg text-gray-500">
            Resultados reais de profissionais que decidiram assumir o protagonismo de suas carreiras com a estratégia certa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} {...review} />
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-gray-100 shadow-sm">
                <span className="flex">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-green-500 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </span>
                <span className="text-sm font-bold text-rhPrimary">4.9/5 no Google Business</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
