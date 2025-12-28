
import React, { useState, useRef, useEffect } from 'react';
import { generateCareerAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CareerAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Olá! Sou seu mentor digital da RH VALE. Qual sua maior dificuldade hoje na sua carreira ou busca por recolocação?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await generateCareerAdvice(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col h-[600px] overflow-hidden">
      <div className="bg-rhPrimary p-6 flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 overflow-hidden shadow-inner">
           <img 
            src="https://i.postimg.cc/PJTpHy7c/1766928307551.png" 
            alt="RH VALE Icon" 
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">RH VALE Assistente</h3>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/70 text-sm">IA com Raciocínio Profundo</span>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50/50"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-4 rounded-2xl text-sm md:text-base leading-relaxed ${
                m.role === 'user' 
                ? 'bg-rhPrimary text-white rounded-tr-none' 
                : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-rhSecondary rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-rhSecondary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-rhSecondary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="text-xs text-gray-400 ml-2 italic">Avaliando estratégia de carreira...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex: Como melhorar meu currículo para área de vendas?"
            className="flex-grow px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rhPrimary/20 focus:border-rhPrimary transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-rhPrimary text-white p-3 rounded-xl hover:bg-rhSecondary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-gray-400 mt-2 text-center uppercase tracking-widest font-bold">
          Potencializado por Gemini 3 Pro (Thinking Mode)
        </p>
      </form>
    </div>
  );
};

export default CareerAssistant;
