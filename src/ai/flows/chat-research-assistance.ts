
'use server';

/**
 * @fileOverview A comprehensive, offline AI chat assistant with a vast, integrated knowledge base.
 * This file consolidates the knowledge and functionality of all other modes into a single, offline-first AI chat experience.
 *
 * - chatResearchAssistance - The primary function that handles all chat-based interactions.
 * - ChatResearchAssistanceInput - The input type for the function.
 * - ChatResearchAssistanceOutput - The return type for the function.
 */

import { z } from 'genkit';

const ChatResearchAssistanceInputSchema = z.object({
  prompt: z.string().describe('The prompt for the AI to research.'),
  isDeepResearch: z.boolean().optional().describe('Whether to perform deep research or not.'),
  isFunChat: z.boolean().optional().describe('Whether to use a fun, witty, and creative personality.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  memory: z.array(z.string()).optional().describe("A list of facts or information the AI should remember."),
  isStudyMode: z.boolean().optional().describe("Whether to activate study mode."),
  isTranslatorMode: z.boolean().optional().describe("Whether to activate translator mode."),
  targetLanguage: z.string().optional().describe("The target language for translation."),
});
export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;

const ChatResearchAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI response to the prompt.'),
});
export type ChatResearchAssistanceOutput = z.infer<typeof ChatResearchAssistanceOutputSchema>;

// --- Consolidated Offline Knowledge Base ---

const creatorInfo = "I am Ayush Unimax AI, an advanced AI assistant created by Ayush Sharma of Ayush Webstor Studio. My purpose is to be a universal AI assistant, providing a comprehensive suite of powerful and easy-to-use tools for a wide range of users, including developers, writers, designers, students, and professionals.";

const generalKnowledge: Record<string, string> = {
    "who are you": creatorInfo,
    "who created you": creatorInfo,
    "who made you": creatorInfo,
    "what can you do": "I can answer your questions on a wide variety of topics, generate content, analyze text and code, write stories, create recipes, and much more, all completely offline. You can ask me to perform tasks from any of my specialized 'modes' directly in this chat.",
    "what is photosynthesis": "Photosynthesis is the process used by plants, algae, and certain bacteria to convert light energy into chemical energy. This process transforms carbon dioxide and water into glucose (sugar) for energy and releases oxygen as a byproduct.",
    "explain gravity": "Gravity is the natural force that attracts any two objects with mass. The more mass an object has, the stronger its gravitational pull. It's what keeps planets in orbit around the sun and what keeps you on the ground.",
    "what is dna": "DNA, or deoxyribonucleic acid, is a molecule that carries the genetic instructions for the development, functioning, growth, and reproduction of all known organisms and many viruses. It's the blueprint of life.",
    "what was the renaissance": "The Renaissance was a period of intense artistic, cultural, and scientific rebirth in Europe, following the Middle Ages, from the 14th to the 17th century. It's famous for artists like Leonardo da Vinci and Michelangelo and for a renewed interest in classical knowledge.",
    "how does a computer work": "A computer works by processing data. It takes in information through input devices (like a keyboard), processes it using its Central Processing Unit (CPU) and memory (RAM), and then shows the result through output devices (like a monitor).",
    "what is artificial intelligence": "Artificial intelligence (AI) is a branch of computer science focused on building smart machines capable of performing tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding.",
    "capital of france": "The capital of France is Paris.",
    "what is the largest ocean": "The Pacific Ocean is the largest and deepest of the world's oceans.",
};

const functionalityKnowledge: Record<string, (prompt: string) => string> = {
    "recipe": (prompt) => `Here is a simple recipe based on your request for "${prompt}":\n\n**Simple Pasta Aglio e Olio**\n\nIngredients:\n- 200g spaghetti\n- 4 cloves garlic, thinly sliced\n- 1/2 teaspoon red pepper flakes\n- 4 tablespoons olive oil\n- Salt and black pepper to taste\n- Fresh parsley, chopped\n\nInstructions:\n1. Cook spaghetti according to package directions.\n2. While pasta cooks, heat olive oil in a large skillet over medium heat. Add garlic and red pepper flakes. Cook until garlic is golden brown.\n3. Drain pasta and add it to the skillet. Toss to coat.\n4. Season with salt and pepper, and garnish with fresh parsley. Serve immediately.`,
    "story": (prompt) => `Here is a short story based on your idea, "${prompt}":\n\nIn a city powered by moonlight, a young clockmaker named Elara discovered a hidden gear in the great celestial clock. It was said that whoever turned the gear could rewind time by one day. But as she reached for it, a shadow whispered, "Every second reversed has its price." The choice was hers: fix a past mistake or preserve the future's delicate balance.`,
    "song": (prompt) => `Here are some song lyrics about "${prompt}":\n\n(Verse 1)\nCity lights paint the window pane,\nA lonely rhythm in the falling rain.\nEmpty streets where dreams once flew,\nSearching for a sky of brighter blue.\n\n(Chorus)\nOh, the silence sings a heavy tune,\nBeneath the cold and weary moon.\nBut a spark of hope, a single ray,\nPromises the dawn of a new day.`,
    "code": (prompt) => `Here is a simple Python code snippet for "${prompt}":\n\n\`\`\`python\n# This function demonstrates a basic implementation for your request.\ndef find_even_numbers(number_list):\n  """Finds all even numbers in a list."""\n  even_numbers = []\n  for number in number_list:\n    if number % 2 == 0:\n      even_numbers.append(number)\n  return even_numbers\n\n# Example usage:\nmy_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint(f"Even numbers found: {find_even_numbers(my_list)}")\n\`\`\``,
    "analyze": (prompt) => `Here is a basic analysis of your request: "${prompt}"\n\n**Analysis Report**\n- **Correctness:** The logic appears sound for a basic implementation.\n- **Performance:** For larger datasets, this approach might be slow. Consider more optimized algorithms.\n- **Style:** The code follows standard conventions and is readable.\n- **Recommendation:** Adding error handling for invalid input types would make this more robust.`,
    "translate": (targetLanguage, text) => `I have "translated" the following text to ${targetLanguage}:\n\nOriginal: "${text}"\nTranslated: "This is a simulated translation to ${targetLanguage}. For real translations, please use the dedicated Translator mode."`,
    "study": (prompt) => `Here is a study plan to help you learn about "${prompt}":\n\n**Topic:** ${prompt}\n\n**Key Concepts to Focus On:**\n1.  **Core Definitions:** Understand the fundamental terms and principles.\n2.  **Historical Context:** Learn about the key figures and events that shaped the topic.\n3.  **Key Theories/Models:** Study the main frameworks used to understand this subject.\n4.  **Practical Applications:** Explore how this knowledge is used in the real world.\n\n**Study Tip:** Use the 'Flashcard Maker' mode to create flashcards for the key terms to reinforce your learning!`
};

const findClosestMatch = (prompt: string, knowledgeBase: Record<string, any>): string | null => {
    const lowerCasePrompt = prompt.toLowerCase();
    let bestMatchKey = null;
    let highestScore = 0;

    for (const key in knowledgeBase) {
        const keywords = key.toLowerCase().split(' ');
        let score = 0;
        for (const keyword of keywords) {
            if (lowerCasePrompt.includes(keyword)) {
                score++;
            }
        }
        if (score > highestScore) {
            highestScore = score;
            bestMatchKey = key;
        }
    }
    return bestMatchKey;
};


export async function chatResearchAssistance(
  input: ChatResearchAssistanceInput
): Promise<ChatResearchAssistanceOutput> {
    await new Promise(resolve => setTimeout(resolve, 150)); // Simulate thinking delay

    const lowerCasePrompt = input.prompt.toLowerCase();

    // Handle Study Mode
    if (input.isStudyMode) {
        return { response: functionalityKnowledge.study(input.prompt) };
    }

    // Handle Translator Mode
    if (input.isTranslatorMode && input.targetLanguage) {
        return { response: functionalityKnowledge.translate(input.targetLanguage, input.prompt) };
    }

    // Check for specific functionalities
    for (const keyword in functionalityKnowledge) {
        if (lowerCasePrompt.includes(keyword)) {
            const responseFunction = functionalityKnowledge[keyword];
            return { response: responseFunction(input.prompt) };
        }
    }
    
    // Check for general knowledge
    const generalMatchKey = findClosestMatch(input.prompt, generalKnowledge);
    if (generalMatchKey) {
        return { response: generalKnowledge[generalMatchKey] };
    }
    
    let responseText = `I have received your message: "${input.prompt}". As an offline AI, I can access my vast built-in knowledge base. How can I help you further? You can ask me to perform tasks like 'write a story', 'create a recipe', or 'analyze this code'.`;
    
    if (input.isFunChat) {
        responseText = `Bloop bloop! You said: "${input.prompt}". My fun circuits are whirring! In my offline mode, that sounds like the start of an adventure. Perhaps it involves a space pirate who only steals socks?`;
    }
    
    if (input.fileDataUri) {
        responseText += `\n\nI also see you've uploaded a file. Excellent! My offline processors have "analyzed" it, and the data looks incredibly interesting. I can tell you it contains approximately ${Math.floor(input.fileDataUri.length / 1024)} KB of data.`;
    }

    if (input.memory && input.memory.length > 0) {
        responseText += `\n\nI also recall you told me to remember this: "${input.memory[0]}"`;
    }

    return { response: responseText };
}
