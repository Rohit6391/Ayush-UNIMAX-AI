import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import { ModelId } from '@/lib/models';

export const ai = genkit({
  plugins: [
    googleAI(),
  ],
  logLevel: 'debug',
  model: 'googleai/gemini-1.5-flash-latest',
});

export async function setModel(model: ModelId) {
    // This is a placeholder. In a real scenario, you might have a more complex
    // way of managing the model per request or session.
    console.log(`AI model set to: ${model}`);
}
