
'use server';

/**
 * @fileOverview An AI agent that analyzes study material from a URL and generates a quiz.
 *
 * - analyzeStudyMaterial - The main function to handle the analysis and quiz generation.
 * - AnalyzeStudyMaterialInput - The input type for the function.
 * - AnalyzeStudyMaterialOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { importFromUrl } from './import-from-url';

// Define the structure for a single Multiple Choice Question
const MCQSchema = z.object({
    id: z.string().describe("A unique identifier for the question."),
    question: z.string().describe("The quiz question."),
    options: z.array(z.string()).min(4).max(4).describe("An array of 4 possible answers."),
    correct_option: z.string().describe("The correct answer from the options array."),
});
export type MCQ = z.infer<typeof MCQSchema>;


const AnalyzeStudyMaterialInputSchema = z.object({
  materialUrl: z.string().url({ message: "Invalid URL provided." }).describe('The URL of the study material to analyze.'),
});
export type AnalyzeStudyMaterialInput = z.infer<typeof AnalyzeStudyMaterialInputSchema>;

const AnalyzeStudyMaterialOutputSchema = z.object({
  questions: z.array(MCQSchema).describe('An array of Multiple Choice Questions based on the material.'),
});
export type AnalyzeStudyMaterialOutput = z.infer<typeof AnalyzeStudyMaterialOutputSchema>;


// The prompt to generate the quiz from the text content
const quizGeneratorPrompt = ai.definePrompt({
    name: 'quizGeneratorPrompt',
    input: { schema: z.object({ materialContent: z.string() }) },
    output: { schema: AnalyzeStudyMaterialOutputSchema },
    prompt: `You are an expert educator and quiz creator. Your task is to create a challenging and relevant multiple-choice quiz from the provided study material.
    
    **Instructions:**
    1.  Read the study material thoroughly.
    2.  Generate a list of 5 multiple-choice questions.
    3.  Each question must have exactly 4 options.
    4.  One of the options must be the correct answer.
    5.  Ensure the questions cover the key concepts and facts from the material.
    6.  The 'id' for each question should be a unique random string (e.g., 'q1', 'q2').
    
    **Study Material:**
    {{{materialContent}}}
    `,
});


export async function analyzeStudyMaterial(
  input: AnalyzeStudyMaterialInput
): Promise<AnalyzeStudyMaterialOutput> {
  return analyzeStudyMaterialFlow(input);
}


const analyzeStudyMaterialFlow = ai.defineFlow(
  {
    name: 'analyzeStudyMaterialFlow',
    inputSchema: AnalyzeStudyMaterialInputSchema,
    outputSchema: AnalyzeStudyMaterialOutputSchema,
  },
  async (input) => {
    // Step 1: Fetch the content from the provided URL
    const { content } = await importFromUrl({ url: input.materialUrl });

    if (!content) {
        throw new Error("Could not retrieve any content from the provided URL.");
    }
    
    // Step 2: Use the fetched content to generate the quiz
    const { output } = await quizGeneratorPrompt({ materialContent: content });

    if (!output || output.questions.length === 0) {
        throw new Error("The AI failed to generate a quiz from the provided material.");
    }

    return output;
  }
);
