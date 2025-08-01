import {genkit, GenerationCommonOptions} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// A proxy that allows us to change the API key dynamically.
const googleAIProxy = {
  name: 'googleai-proxy',
  initializer: () => {}, // Add the required initializer function
  async generate(request: any, streamingCallback?: (chunk: any) => void, options?: GenerationCommonOptions) {
    const apiKey = options?.auth || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("API key not found. Please set your API key in the chat interface.");
    }
    const plugin = googleAI({ apiKey });
    const generator = await plugin.generate(request, streamingCallback, options);
    return generator;
  },
  async listModels(options?: GenerationCommonOptions) {
    const apiKey = options?.auth || process.env.GEMINI_API_KEY;
    if (!apiKey) {
        // Return an empty array or handle as appropriate if no key is available
        return [];
    }
    const plugin = googleAI({ apiKey });
    const models = await plugin.listModels(options);
    return models;
  },
};

export const ai = genkit({
  plugins: [googleAIProxy],
  model: 'googleai/gemini-1.5-flash-latest',
});
