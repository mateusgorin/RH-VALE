
import React, { useState } from 'react';

const SuccessStories: React.FC = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const leftImages = [
    "https://i.postimg.cc/cCVTxVQM/kennifevale-20251228-0016.jpg",
    "https://i.postimg.cc/hvHMDH93/kennifevale-20251228-0017.jpg",
    "https://i.postimg.cc/7PcKnTpy/kennifevale-20251228-0018.jpg",
    "https://i.postimg.cc/SQ5gfzw0/kennifevale-20251228-0019.jpg",
    "https://i.postimg.cc/dQX5jTzP/kennifevale-20251228-0020.jpg"
  ];

  const rightImages = [
    "https://i.postimg.cc/W3CV61G0/Whats-App-Image-2025-12-28-at-10-28-16-(1).jpg",
    "https://i.postimg.cc/d1pFmV2r/Whats-App-Image-2025-12-28-at-10-28-16-(2).jpg",
    "https://i.postimg.cc/bJWPHwxS/Whats-App-Image-2025-12-28-at-10-28-17.jpg",
    "https://i.postimg.cc/Y9Z7fC64/Whats-App-Image-2025-12-28-at-10-28-17-(1).jpg",
    "https://i.postimg.cc/sXvyhhhj/Whats-App-Image-2025-12-28-at-10-28-17-(2).jpg"
  ];

  const nextLeft = () => setLeftIndex((prev) => (prev + 1) % leftImages.length);
  const prevLeft = () => setLeftIndex((prev) => (prev - 1 + leftImages.length) % leftImages.length);

  const nextRight = () => setRightIndex((prev) => (prev + 1) % rightImages.length);
  const prevRight = () => setRightIndex((prev) => (prev - 1 + rightImages.length) % rightImages.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Lado Esquerdo: Galeria de Recrutamento (Agora à esquerda) */}
          <div className="flex-1 w-full max-w-[420px] mx-auto lg:mx-0">
            <div className="text-center mb-10">
               <h3 className="text-3xl font-bold text-rhPrimary font-display tracking-tight">Recrutamento</h3>
               <div className="w-12 h-1 bg-rhSecondary/20 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="relative group">
              {/* Image Viewport */}
              <div className="overflow-hidden rounded-[48px] shadow-2xl border-[10px] border-white ring-1 ring-gray-100 aspect-[4/5] bg-white">
                <div 
                  className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) h-full"
                  style={{ transform: `translateX(-${rightIndex * 100}%)` }}
                >
                  {rightImages.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full flex items-center justify-center bg-white">
                      <img 
                        src={src} 
                        alt={`Recrutamento ${index + 1}`} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={prevRight}
                className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-rhPrimary hover:bg-rhPrimary hover:text-white transition-all z-20 active:scale-90"
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextRight}
                className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-rhPrimary hover:bg-rhPrimary hover:text-white transition-all z-20 active:scale-90"
                aria-label="Próximo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {rightImages.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setRightIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${rightIndex === i ? 'bg-rhPrimary w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'}`} 
                />
              ))}
            </div>
          </div>

          {/* Lado Direito: Galeria de Posicionamento (Agora à direita) */}
          <div className="flex-1 w-full max-w-[420px] mx-auto lg:mx-0">
            <div className="text-center mb-10">
               <h3 className="text-3xl font-bold text-rhPrimary font-display tracking-tight">Posicionamento</h3>
               <div className="w-12 h-1 bg-rhSecondary/20 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="relative group">
              {/* Image Viewport */}
              <div className="overflow-hidden rounded-[48px] shadow-2xl border-[10px] border-white ring-1 ring-gray-100 aspect-[4/5] bg-white">
                <div 
                  className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) h-full"
                  style={{ transform: `translateX(-${leftIndex * 100}%)` }}
                >
                  {leftImages.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-full">
                      <img 
                        src={src} 
                        alt={`Posicionamento ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={prevLeft}
                className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-rhPrimary hover:bg-rhPrimary hover:text-white transition-all z-20 active:scale-90"
                aria-label="Anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextLeft}
                className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center text-rhPrimary hover:bg-rhPrimary hover:text-white transition-all z-20 active:scale-90"
                aria-label="Próximo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {leftImages.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setLeftIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${leftIndex === i ? 'bg-rhPrimary w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'}`} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
