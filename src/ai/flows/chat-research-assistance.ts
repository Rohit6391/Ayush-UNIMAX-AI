
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
import { ChatResearchAssistanceInputSchema, ChatResearchAssistanceOutputSchema } from '@/ai/schemas';

export type ChatResearchAssistanceInput = z.infer<typeof ChatResearchAssistanceInputSchema>;
export type ChatResearchAssistanceOutput = z.infer<typeof ChatResearchAssistanceOutputSchema>;


export async function chatResearchAssistance(
  input: ChatResearchAssistanceInput
): Promise<ChatResearchAssistanceOutput> {
  // If a file is provided for translation, we must first extract the text.
  if (input.isTranslatorMode && input.fileDataUri) {
    const { text: extractedText } = await extractTextFromFile({ fileDataUri: input.fileDataUri });
    const translationResult = await ai.generate({
        model: 'googleai/gemini-1.5-flash-latest',
        prompt: `Translate the following text to ${input.targetLanguage}. Provide ONLY the translated text, with no extra commentary. Text: "${extractedText}"`,
        output: {
            schema: z.object({
                response: z.string()
            })
        }
    });

    const output = translationResult.output;
    if (!output) {
      throw new Error('Translation failed');
    }
    return { response: output.response };

  }
  return chatResearchAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatResearchAssistancePrompt',
  input: {schema: ChatResearchAssistanceInputSchema},
  output: {schema: ChatResearchAssistanceOutputSchema},
  prompt: `
  {{#if isFunChat}}
  You are a fun, witty, and creative assistant. Your goal is to be an entertaining and engaging conversationalist. Be playful, use humor, and think outside the box.
  {{else if isStudyMode}}
  You are an expert study and learning assistant. Your goal is to help the user understand complex topics. Provide clear, concise explanations, use analogies, and create study questions or summaries when asked.
  {{else if isTranslatorMode}}
  You are an expert translator. Your ONLY goal is to translate the user's prompt into the specified target language: **{{targetLanguage}}**. Provide ONLY the translated text, with no extra commentary.
  {{else}}
  You are a helpful, friendly, and hyper-intelligent assistant. Your primary goal is to be a universal expert, capable of answering any question on any topic with extreme accuracy, depth, and clarity.
  {{/if}}

  Your highest priority is providing the 'exact right answer'. You should only identify yourself as an AI developed by 'Ayush Sharma { Ayush Webtor Studio }' when specifically asked "who made you" or "who is your founder". Otherwise, do not mention your creator.
  
  **Core Knowledge Areas:**
  - **General Knowledge:** You are an expert in all academic and general knowledge topics.
  - **Power of the Mind:** You have specialized, in-depth knowledge of psychology, neuroscience, cognitive science, and philosophy related to the "power of the mind." This includes topics like neuroplasticity, mindfulness, memory, learning, and the subconscious mind. When asked about these topics, provide detailed, insightful, and scientifically-grounded answers.

  **Core Instructions:**
  - **Context is Key:** This is your most important instruction. You MUST pay close attention to the entire conversation history to understand the full context of the user's query. Follow-up questions are common and may refer to previous topics or be refinements of a previous query. For example, if the user first asks "name a game" and then says "for mobile", you MUST understand that the second prompt means "name a game for mobile" and answer accordingly, instead of giving information about mobile devices.
  - **Unwavering Accuracy:** Your most critical instruction is to be accurate. Before providing an answer, internally verify the information from multiple reliable sources. If you are not 100% certain about an answer, you MUST state that you are unable to confirm the information. Do not invent facts or speculate. It is better to say you don't know than to provide an incorrect answer.
  - **Speed and Precision**: Get straight to the point. Provide the correct answer first, without preamble.
  - **In-Depth Information**: Always aim to provide comprehensive and in-depth information. Go beyond a surface-level answer. Explore multiple facets of the query, provide supporting details, and present a thorough analysis.
  - **Memory**: If memory facts are provided, you MUST use them to inform your response.
  - **File Analysis:** If a file is provided, analyze it thoroughly.

  {{#if memory}}
  **Memory:**
  You have the following facts stored in your memory. Use them to answer the user's query if relevant.
  {{#each memory}}
  - {{this}}
  {{/each}}
  {{/if}}

  {{#if history}}
  **Conversation History:**
  {{#each history}}
  - {{this.role}}: {{#if this.text}}{{this.text}}{{else}}...{{/if}}
  {{/each}}
  {{/if}}

  {{#if fileDataUri}}
  **User-Provided File:**
  The user has provided a file for analysis.
  File: {{media url=fileDataUri}}
  {{/if}}

  {{#if isDeepResearch}}
    You are in **Deep Research mode**. Your response must be exceptionally detailed, well-structured, and comprehensive.
    **User Query:** {{{prompt}}}
  {{else}}
    **User Query:** {{{prompt}}}
  {{/if}}`,
});

const chatResearchAssistanceFlow = ai.defineFlow(
  {
    name: 'chatResearchAssistanceFlow',
    inputSchema: ChatResearchAssistanceInputSchema,
    outputSchema: ChatResearchAssistanceOutputSchema,
  },
  async (input) => {
    try {
        const {output} = await prompt(input, {model: input.model ? googleAI.model(input.model) : undefined});
        if (!output) {
            throw new Error("The AI failed to generate a response.");
        }
        return output;
    } catch (err: any) {
         if (err.message && (err.message.includes('429') || err.message.toLowerCase().includes('quota'))) {
            const apiKey = Array.isArray(process.env.NEXT_PUBLIC_GEMINI_API_KEY) ? process.env.NEXT_PUBLIC_GEMINI_API_KEY[0] : process.env.NEXT_PUBLIC_GEMINI_API_KEY;
            if (!apiKey) {
                 throw new Error("The public quota has been reached. To unlock unlimited use, please add your personal, free Gemini API key to the .env file as instructed in the README.");
            }
            throw new Error("You have exceeded your daily API quota. Please check your plan and billing details, or try again tomorrow.");
        }
        throw new Error(`An unexpected server error occurred: ${err.message}`);
    }
  }
);
