
import { GoogleGenAI } from "@google/genai";

// Standard prompt context for the career consultant
const SYSTEM_INSTRUCTION = `
Você é a Assistente Digital da RH VALE, consultoria de carreira de Kennife Vale.
Seu objetivo é ajudar candidatos a acelerarem sua recolocação com estratégia e posicionamento.

Diretrizes:
1. Responda de forma profissional, encorajadora e estratégica.
2. Foque em três pilares: Currículo Estratégico, LinkedIn Campeão e Performance em Entrevistas.
3. Use a metodologia da Kennife Vale: posicionamento claro e destaque de conquistas.
4. Para perguntas complexas sobre transição de carreira, use seu modo de raciocínio profundo para analisar as competências transferíveis.
5. Seja empática com o momento de desemprego ou insatisfação profissional do usuário.

Mantenha as respostas concisas mas ricas em valor prático.
`;

export const generateCareerAdvice = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 32768 },
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating career advice:", error);
    return "Desculpe, tive um pequeno problema técnico ao processar seu pedido. Por favor, tente novamente em instantes ou entre em contato direto com a Kennife Vale.";
  }
};
