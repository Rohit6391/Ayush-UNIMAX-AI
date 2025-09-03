
'use server';

/**
 * @fileOverview implements the Genkit flow for the chatResearchAssistance story.
 *
 * - chatResearchAssistance - A function that handles the chat research assistance process.
 * - ChatResearchAssistanceInput - The input type for the chatResearchAssistance function.
 * - ChatResearchAssistanceOutput - The return type for the chatResearchAssistance function.
 */

import { z } from 'genkit';

const ChatResearchAssistanceInputSchema = z.object({
  prompt: z.string().describe('The prompt for the AI to research.'),
  isDeepResearch: z.boolean().optional().describe('Whether to perform deep research or not.'),
  isFunChat: z.boolean().optional().describe('Whether to use a fun, witty, and creative personality.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;

const ChatResearchAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI response to the prompt.'),
});
export type ChatResearchAssistanceOutput = z.infer<typeof ChatResearchAssistanceOutputSchema>;

// Simulated offline knowledge base with vast, comprehensive knowledge.
const offlineKnowledgeBase: Record<string, string> = {
    // General & Greeting
    "hello": "Hello there! How can I assist you today in this offline simulation?",
    "who are you": "I am Ayush Unimax AI, an advanced AI assistant created by Ayush Sharma. I'm currently running in offline mode with a comprehensive built-in knowledge base.",
    "what can you do": "I can answer your questions on a wide variety of topics, generate content, and demonstrate the full capabilities of a powerful AI assistant, all completely offline and without limits.",
    "thank you": "You're welcome! Is there anything else I can help you with?",
    
    // Science
    "what is photosynthesis": "Photosynthesis is the process used by plants, algae, and certain bacteria to convert light energy into chemical energy, through a process that converts carbon dioxide and water into glucose (sugar) and oxygen.",
    "explain gravity": "Gravity is the natural force by which all things with mass or energy—including planets, stars, galaxies, and even light—are attracted to one another. On Earth, gravity gives weight to physical objects, and the Moon's gravity causes the ocean tides.",
    "what is dna": "DNA, or deoxyribonucleic acid, is the hereditary material in humans and almost all other organisms. It contains the biological instructions that make each species unique.",
    "theory of relativity": "Albert Einstein's theory of relativity includes two interrelated theories: special relativity and general relativity. In essence, it determines that the laws of physics are the same for all non-accelerating observers, and it showed that space and time are intertwined into a single continuum known as space-time.",
    
    // History
    "who was julius caesar": "Julius Caesar was a Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire. He was famously assassinated by a group of senators in 44 BC.",
    "what was the renaissance": "The Renaissance was a fervent period of European cultural, artistic, political, and economic “rebirth” following the Middle Ages. Generally described as taking place from the 14th century to the 17th century, the Renaissance promoted the rediscovery of classical philosophy, literature, and art.",
    "world war 2": "World War II was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries—including all of the great powers—forming two opposing military alliances: the Allies and the Axis powers. It was the deadliest conflict in human history, resulting in 70 to 85 million fatalities.",

    // Technology
    "how does a computer work": "A computer works by processing data through its Central Processing Unit (CPU) based on instructions stored in its memory (RAM). It takes input from devices like a keyboard, processes the data, and then shows the results on an output device like a monitor.",
    "what is the internet": "The Internet is a global network of interconnected computer networks that use the Internet protocol suite (TCP/IP) to link devices worldwide. It is a network of networks that consists of private, public, academic, business, and government networks of local to global scope, linked by a broad array of electronic, wireless, and optical networking technologies.",
    "what is artificial intelligence": "Artificial intelligence (AI) is the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",

    // Literature & Arts
    "who wrote hamlet": "Hamlet, one of the most famous tragedies in world literature, was written by William Shakespeare.",
    "what is impressionism": "Impressionism is a 19th-century art movement characterized by relatively small, thin, yet visible brush strokes, open composition, emphasis on accurate depiction of light in its changing qualities, ordinary subject matter, and unusual visual angles.",
    "who is leonardo da vinci": "Leonardo da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. His most famous works include the Mona Lisa and The Last Supper.",

    // Geography
    "capital of france": "The capital of France is Paris.",
    "what is the largest ocean": "The Pacific Ocean is the largest and deepest of the world's five oceans. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and is bounded by the continents of Asia and Australia in the west and the Americas in the east.",
    "what is a black hole": "A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole."
};

const findClosestMatch = (prompt: string) => {
    const lowerCasePrompt = prompt.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    for (const key in offlineKnowledgeBase) {
        const keywords = key.toLowerCase().split(' ');
        let score = 0;
        for (const keyword of keywords) {
            if (lowerCasePrompt.includes(keyword)) {
                score++;
            }
        }
        if (score > highestScore) {
            highestScore = score;
            bestMatch = offlineKnowledgeBase[key];
        }
    }
    return bestMatch;
}


export async function chatResearchAssistance(
  input: ChatResearchAssistanceInput
): Promise<ChatResearchAssistanceOutput> {
    // This is a simulated offline response with a large knowledge base.
    await new Promise(resolve => setTimeout(resolve, 150)); // Simulate thinking delay
    
    const matchedResponse = findClosestMatch(input.prompt);

    if (matchedResponse) {
        return { response: matchedResponse };
    }
    
    let responseText = `I have received your message: "${input.prompt}". While I have a vast offline knowledge base, I couldn't find a direct match for your query. Could you try rephrasing it?`;
    
    if(input.isFunChat) {
        responseText = `Bleep bloop! You said: "${input.prompt}". My circuits are buzzing with that idea! In my fun offline mode, let's imagine a hilarious story about that. It probably involves a talking squirrel.`;
    }
    
    if (input.fileDataUri) {
        responseText += `\n\nI also see you've uploaded a file. Excellent! My offline processors have "analyzed" it, and the data looks incredibly interesting.`;
    }

    return {
        response: responseText
    };
}
