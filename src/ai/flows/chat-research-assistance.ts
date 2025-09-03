
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

// Simulated offline knowledge base
const offlineKnowledgeBase: Record<string, string> = {
    "hello": "Hello there! How can I assist you today in this offline simulation?",
    "who are you": "I am Ayush Unimax AI, an advanced AI assistant created by Ayush Sharma. I'm currently running in offline mode.",
    "what can you do": "In my offline mode, I can answer some basic questions, remember information you provide me, and demonstrate the chat functionality of this application. For full capabilities, I would need an internet connection.",
    "capital of france": "The capital of France is Paris.",
    "how does a computer work": "A computer works by processing data through its Central Processing Unit (CPU) based on instructions stored in its memory, and then showing the results on an output device like a monitor.",
    "what is the meaning of life": "That is a profound philosophical question! In this offline mode, I can tell you that many believe it's about finding happiness, creating connections, and leaving a positive impact on the world.",
};

const findClosestMatch = (prompt: string) => {
    const lowerCasePrompt = prompt.toLowerCase();
    // Simple keyword matching
    for (const key in offlineKnowledgeBase) {
        if (lowerCasePrompt.includes(key)) {
            return offlineKnowledgeBase[key];
        }
    }
    return null;
}


export async function chatResearchAssistance(
  input: ChatResearchAssistanceInput
): Promise<ChatResearchAssistanceOutput> {
    // This is a simulated offline response.
    await new Promise(resolve => setTimeout(resolve, 250)); // Simulate thinking delay
    
    const matchedResponse = findClosestMatch(input.prompt);

    if (matchedResponse) {
        return { response: matchedResponse };
    }
    
    let responseText = `I have received your message: "${input.prompt}". As an offline simulation, I have limited knowledge but I will do my best to help.`;
    
    if(input.isFunChat) {
        responseText = `Bleep bloop! You said: "${input.prompt}". I'm a fun offline AI, and I think that's super interesting! Let's pretend I just told a great joke about it.`;
    }
    
    if (input.fileDataUri) {
        responseText += `\n\nI also see you've uploaded a file. Great! I've "analyzed" it and it looks fascinating.`;
    }

    return {
        response: responseText
    };
}
