'use server';
/**
 * @fileOverview An AI agent that generates chart data from a natural language prompt.
 *
 * - generateChartFromPrompt - A function that handles the chart generation.
 * - GenerateChartFromPromptInput - The input type for the function.
 * - GenerateChartFromPromptOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateChartFromPromptInputSchema = z.object({
  prompt: z.string().describe('A natural language description of the chart to generate, including the data and the desired chart type (e.g., bar, line, pie).'),
});
export type GenerateChartFromPromptInput = z.infer<typeof GenerateChartFromPromptInputSchema>;

const GenerateChartFromPromptOutputSchema = z.object({
  type: z.enum(['bar', 'line', 'pie']).describe('The type of chart to render.'),
  data: z.array(z.record(z.any())).describe('The data for the chart, as an array of objects.'),
  config: z.record(z.any()).describe('The configuration for the chart, mapping keys from the data to chart properties like colors and labels.'),
  xAxisKey: z.string().optional().describe("The key from a data object to use for the x-axis labels (for bar and line charts)."),
});
export type GenerateChartFromPromptOutput = z.infer<typeof GenerateChartFromPromptOutputSchema>;

export async function generateChartFromPrompt(input: GenerateChartFromPromptInput): Promise<GenerateChartFromPromptOutput> {
  return generateChartFromPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateChartFromPrompt',
  input: { schema: GenerateChartFromPromptInputSchema },
  output: { schema: GenerateChartFromPromptOutputSchema },
  prompt: `You are an expert data visualization AI. Your task is to convert a natural language prompt into a valid JSON object that can be used to render a chart with the Recharts library.

  Based on the user's prompt, determine the best chart type (bar, line, or pie) and construct the data and configuration objects.

  **Instructions:**
  1.  **Chart Type**: Determine if the user wants a 'bar', 'line', or 'pie' chart.
  2.  **Data Array**: Create a 'data' array of objects.
      *   For 'bar' and 'line' charts, each object should have a key for the x-axis (e.g., 'month', 'category') and one or more keys for the y-axis values. You MUST identify the x-axis key and set it in the 'xAxisKey' field.
      *   For 'pie' charts, each object must have a 'name' key for the label and a 'value' key for the numerical value. 'xAxisKey' should be omitted for pie charts.
  3.  **Config Object**: Create a 'config' object.
      *   This object maps data keys to their visual representation.
      *   For bar/line charts, the keys should match the y-axis value keys in the data. For example, for a bar chart with data key 'sales', the config might look like: \`{"sales": {"label": "Sales", "color": "hsl(var(--chart-1))"}}\`
      *   For pie charts, the 'name' key from the data array should be used as the key in the config. Example: \`{"iPhone": {"label": "iPhone", "color": "hsl(var(--chart-1))"}}\`
  4.  **Colors**: Use HSL CSS variables for colors (e.g., \`hsl(var(--chart-1))\`, \`hsl(var(--chart-2))\`, etc.).

  **User Prompt:**
  {{{prompt}}}
  `,
});

const generateChartFromPromptFlow = ai.defineFlow(
  {
    name: 'generateChartFromPromptFlow',
    inputSchema: GenerateChartFromPromptInputSchema,
    outputSchema: GenerateChartFromPromptOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input, { model: 'googleai/gemini-2.5-pro-latest'});
    if (!output) {
      throw new Error('Failed to generate chart data from prompt.');
    }
    return output;
  }
);
