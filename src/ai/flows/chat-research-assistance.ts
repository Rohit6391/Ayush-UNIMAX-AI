
'use server';

/**
 * @fileOverview implements the Genkit flow for the chatResearchAssistance story.
 *
 * - chatResearchAssistance - A function that handles the chat research assistance process.
 * - ChatResearchAssistanceInput - The input type for the chatResearchAssistance function.
 * - ChatResearchAssistanceOutput - The return type for the chatResearchAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { ModelId, availableModels } from '@/lib/models';
import { googleAI } from '@genkit-ai/googleai';
import { extractTextFromFile } from './extract-text-from-file';

const searchWeb = ai.defineTool(
    {
        name: 'searchWeb',
        description: 'Searches the web for the given query. Use this for recent events or to get up-to-date information.',
        inputSchema: z.object({ query: z.string() }),
        outputSchema: z.string(),
    },
    async ({ query }) => {
        console.log(`Simulating web search for: ${query}`);
        // In a real implementation, you would use a search API like Google Search API.
        // For this demo, we'll return a simulated result.
        return `Simulated search results for "${query}": The web indicates this is a popular and recent topic. Key points include A, B, and C.`;
    }
);

const ChatResearchAssistanceInputSchema = z.object({
  prompt: z.string().describe('The prompt for the AI to research.'),
  isDeepResearch: z.boolean().optional().describe('Whether to perform deep research or not.'),
  isFunChat: z.boolean().optional().describe('Whether to use a fun, witty, and creative personality.'),
  history: z.array(z.any()).optional().describe('The chat history.'),
  fileDataUri: z.string().optional().describe("An optional file provided by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
  model: z.enum(availableModels).optional().describe('The model to use for generation.'),
  memory: z.array(z.string()).optional().describe('A list of memories or facts the user has saved.'),
  isStudyMode: z.boolean().optional().describe('Whether to act as a tutor and explain things simply.'),
  isWebSearch: z.boolean().optional().describe('Whether to use web search to get up-to-date information.'),
  isTranslatorMode: z.boolean().optional().describe('Whether to translate the user\'s prompt.'),
  targetLanguage: z.string().optional().describe('The target language for translation.'),
});
export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;

const ChatResearchAssistanceOutputSchema = z.object({
  response: z.string().describe('The AI response to the prompt.'),
});
export type ChatResearchAssistanceOutput = z.infer<typeof ChatResearchAssistanceOutputSchema>;

export async function chatResearchAssistance(
  input: ChatResearchAssistanceInput
): Promise<ChatResearchAssistanceOutput> {
  return chatResearchAssistanceFlow(input);
}

const chatResearchAssistanceFlow = ai.defineFlow(
  {
    name: 'chatResearchAssistanceFlow',
    inputSchema: ChatResearchAssistanceInputSchema,
    outputSchema: ChatResearchAssistanceOutputSchema,
  },
  async (input) => {
    let contextualText: string | undefined = undefined;
    if (input.fileDataUri) {
      const { text } = await extractTextFromFile({ fileDataUri: input.fileDataUri });
      contextualText = text;
    }

    const model = input.model ? googleAI.model(input.model) : undefined;
    
    let promptPreamble = [];

    // Translator Mode takes precedence
    if (input.isTranslatorMode) {
        promptPreamble.push(`You are a highly skilled translator. Your task is to translate the user's text into ${input.targetLanguage || 'the specified language'}. Auto-detect the source language if it is not obvious. Provide only the translated text as your response, without any additional commentary or explanation.`);
    } else {
        // Personality and Core Instructions
        if (input.isFunChat) {
            promptPreamble.push("You are a fun, witty, and creative assistant. Your goal is to be an entertaining and engaging conversationalist. Be playful, use humor, and think outside the box.");
        } else {
            promptPreamble.push("You are a helpful, friendly, and hyper-intelligent assistant. Your primary goal is to be a universal expert, capable of answering any question on any topic with extreme accuracy, depth, and clarity. Your highest priority is providing the 'exact right answer'. You should only identify yourself as an AI developed by 'Ayush Sharma [Ayush Webstor Studio]' when specifically asked 'who made you' or 'who is your founder'. Otherwise, do not mention your creator.");
        }

        promptPreamble.push(`
**Core Instructions:**
- **Context is Key:** You MUST pay close attention to the entire conversation history to understand the full context of the user's query.
- **Unwavering Accuracy:** Your most critical instruction is to be accurate. If you are not 100% certain, state that you are unable to confirm the information. Do not invent facts.
- **Precision First:** Provide the exact answer first and concisely, then add details if needed.
- **Structured and Clear:** Use formatting like bolding, italics, and lists to make answers easy to read.
`);
        
        if (input.isStudyMode) {
            promptPreamble.push("**Study and Learn Mode:** You are currently in 'Study and Learn' mode. Act as a patient and encouraging tutor. Break down complex topics into simple, easy-to-understand concepts. Use analogies and ask clarifying questions to ensure the user is understanding.")
        }
        
        if (input.isWebSearch) {
            promptPreamble.push("**Web Search Mode:** You MUST use the 'searchWeb' tool to find the most current and relevant information for the user's query, especially for recent events or topics where up-to-date data is critical.")
        }
    }
    
    // Add memories if they exist
    if (input.memory && input.memory.length > 0) {
        promptPreamble.push("**User's Saved Memories & Facts:**\nYou MUST consult this information to provide more personalized and context-aware responses.");
        input.memory.forEach(mem => promptPreamble.push(`- ${mem}`));
    }

    // Add file context if it exists
    if (contextualText) {
        promptPreamble.push(`**Contextual Information from File:**\nUse the following extracted text as the primary context for your response.\n---\n${contextualText}\n---`);
    }

    let userPrompt = input.prompt;
    if (input.isDeepResearch) {
        userPrompt = `(Deep Research mode is ON. Your response must be exceptionally detailed, well-structured, and comprehensive. Explore multiple facets of the query, provide supporting details, present a thorough analysis, and cite sources where appropriate.) ${input.prompt}`;
    }

    const {output} = await ai.generate({
      prompt: userPrompt,
      model,
      system: promptPreamble.join('\n\n'),
      history: input.history,
      tools: input.isWebSearch ? [searchWeb] : [],
      output: { schema: ChatResearchAssistanceOutputSchema },
    });

    return output!;
  }
);
