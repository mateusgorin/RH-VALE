
import React, { useState, useEffect } from 'react';

const DevelopmentDisclaimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostra o aviso após um pequeno delay para suavidade
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-rhPrimary/80 backdrop-blur-md animate-in fade-in duration-500"></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-[32px] p-8 md:p-12 max-w-xl w-full shadow-2xl border border-white/20 transform animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
        <div className="w-20 h-20 bg-rhPrimary/5 rounded-full flex items-center justify-center mb-8 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-rhPrimary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-rhPrimary text-center mb-6 font-display">
          Aviso Importante
        </h2>
        
        <div className="space-y-4 text-gray-600 text-center leading-relaxed mb-10">
          <p className="font-semibold text-rhPrimary text-lg">
            Este site ainda está em desenvolvimento.
          </p>
          <p>
            O que você vê aqui é apenas um <span className="font-bold">esboço inicial</span> da plataforma RH VALE.
          </p>
          <p>
            Nenhuma informação apresentada é 100% verídica no momento, tratando-se de 
            <span className="text-rhSecondary font-bold"> conteúdo gerado por Inteligência Artificial (IA)</span> para fins de demonstração de layout e funcionalidade.
          </p>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="w-full bg-rhPrimary text-white py-5 rounded-2xl font-bold text-lg hover:bg-rhSecondary transition-all shadow-xl active:scale-95"
        >
          Entendi e desejo continuar
        </button>
      </div>
    </div>
  );
};

export default DevelopmentDisclaimer;
