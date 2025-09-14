
import {genkit, GenerationCommon, ModelReference} from 'genkit';
import {googleAI, GoogleAIGeminiModel} from '@genkit-ai/googleai';
import {ModelId} from '@/lib/models';

/**
 * In a real-world production app, you should not be using an API key.
 * Instead, you should be using Application Default Credentials.
 * For more details, see
 * https://cloud.google.com/docs/authentication/production
 */
export const ai = genkit({
  plugins: [
    googleAI({
      // The API key is defined in the environment variable `GEMINI_API_KEY`.
    }),
  ],
  logLevel: 'debug',
  model: 'googleai/gemini-1.5-flash-latest',
});

