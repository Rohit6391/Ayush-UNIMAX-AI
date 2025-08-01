import {genkit, GenerationCommonOptions} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// A proxy that allows us to change the API key dynamically.
const googleAIProxy = (options: any = {}) => {
  return {
    name: 'googleai-proxy',
    async generate(request: any, streamingCallback?: (chunk: any) => void, options?: GenerationCommonOptions) {
      const apiKey = options?.auth || process.env.GEMINI_API_KEY;
      const plugin = googleAI({ apiKey });
      const generator = await plugin.generate(request, streamingCallback, options);
      return generator;
    },
    async listModels(options?: GenerationCommonOptions) {
      const apiKey = options?.auth || process.env.GEMINI_API_KEY;
      const plugin = googleAI({ apiKey });
      const models = await plugin.listModels(options);
      return models;
    },
  };
};

export const ai = genkit({
  plugins: [googleAIProxy],
  model: 'googleai/gemini-1.5-flash-latest',
});
