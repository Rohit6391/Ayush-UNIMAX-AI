import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      // An API key can be specified here, but we will pass it in dynamically
      // in the flow functions based on user input for better flexibility.
    }),
  ],
  model: 'googleai/gemini-1.5-flash-latest',
});
