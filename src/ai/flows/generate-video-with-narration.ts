
'use server';

/**
 * @fileOverview An AI agent that creates a narrated video storyboard.
 * It generates a script, breaks it into scenes, creates an image for each scene,
 * and generates a single audio file for the entire narration.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { generateImageFromStoryboard } from './generate-image-from-storyboard';
import { textToSpeech } from './text-to-speech';

// Define the structure for a single scene
const SceneSchema = z.object({
  narration: z.string().describe('The narration text for this specific scene.'),
  image_prompt: z.string().describe('A detailed prompt for the image generation model to create a visual for this scene.'),
});

// Define the overall storyboard structure
const StoryboardSchema = z.object({
  scenes: z.array(SceneSchema).describe('An array of scenes that make up the storyboard.'),
});
export type Storyboard = z.infer<typeof StoryboardSchema>;

// Define the input for the main flow
const GenerateVideoWithNarrationInputSchema = z.object({
  prompt: z.string().describe('The user\'s initial prompt for the story or concept.'),
  language: z.string().optional().describe('The language for the narration. Defaults to English if not provided.'),
  photoDataUri: z.string().optional().describe("An optional photo to animate, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."),
});
export type GenerateVideoWithNarrationInput = z.infer<typeof GenerateVideoWithNarrationInputSchema>;

// Define the output for a single scene, now including the image URL
const SceneOutputSchema = z.object({
    narration: z.string(),
    imageUrl: z.string(),
});
export type Scene = z.infer<typeof SceneOutputSchema>;

// Define the final output of the main flow
const GenerateVideoWithNarrationOutputSchema = z.object({
    scenes: z.array(SceneOutputSchema).describe('The array of generated scenes with their images.'),
    narrationAudioUrl: z.string().describe('A data URI for the complete narration audio.'),
});
export type GenerateVideoWithNarrationOutput = z.infer<typeof GenerateVideoWithNarrationOutputSchema>;


export async function generateVideoWithNarration(
  input: GenerateVideoWithNarrationInput
): Promise<GenerateVideoWithNarrationOutput> {
  return generateVideoWithNarrationFlow(input);
}


// 1. AI Prompt to create the storyboard structure (scenes with narration and image prompts)
const storyboardPrompt = ai.definePrompt({
    name: 'storyboardGenerator',
    input: { schema: GenerateVideoWithNarrationInputSchema },
    output: { schema: StoryboardSchema },
    prompt: `You are a creative storyteller and scriptwriter. Your task is to create a short storyboard based on the user's prompt. Your entire response MUST be a single, valid JSON object.

    **JSON Output Structure:**
    {
      "scenes": [
        {
          "narration": "The narration for the first scene.",
          "image_prompt": "A detailed, visually-rich prompt for the first scene's image."
        },
        {
          "narration": "The narration for the second scene.",
          "image_prompt": "A detailed, visually-rich prompt for the second scene's image."
        }
      ]
    }
    
    **Instructions:**
    1.  **JSON Only**: Ensure your entire response is ONLY the JSON object, with no extra text or markdown.
    2.  **Number of Scenes**: Create a storyboard with 3 to 5 scenes.
    3.  **Narration Language**: Write the 'narration' for each scene in the requested language: **{{#if language}}{{language}}{{else}}English{{/if}}**.
    4.  **Image Prompt Language**: The 'image_prompt' for each scene MUST be written in **English** to ensure the best results from the image generation model.
    5.  **Image Prompts**: For each scene, write a brief narration and a detailed, visually-rich prompt for an image generation model to create a corresponding picture.
    6.  **If an image is provided**, the first scene's image_prompt should instruct the AI to use the provided image as a base and animate it according to the user's main prompt. Subsequent scenes should continue the story from there.

    {{#if photoDataUri}}
    The user has provided an image to start the story.
    Image: {{media url=photoDataUri}}
    {{/if}}

    User Prompt: {{{prompt}}}
    `,
});


// 2. The main flow orchestrating the entire process
const generateVideoWithNarrationFlow = ai.defineFlow(
  {
    name: 'generateVideoWithNarrationFlow',
    inputSchema: GenerateVideoWithNarrationInputSchema,
    outputSchema: GenerateVideoWithNarrationOutputSchema,
  },
  async (input) => {
    // Step 1: Generate the storyboard structure
    const { output: storyboard } = await storyboardPrompt(input);
    if (!storyboard || !storyboard.scenes || storyboard.scenes.length === 0) {
        throw new Error('The AI failed to generate a valid storyboard structure. Please try a different prompt.');
    }

    // Step 2: Generate an image for each scene in parallel
    const imageGenerationPromises = storyboard.scenes.map((scene, index) => {
        // Only pass the photoDataUri to the first scene's image generation
        const photoForScene = index === 0 ? input.photoDataUri : undefined;
        return generateImageFromStoryboard({ 
            imagePrompt: scene.image_prompt,
            photoDataUri: photoForScene,
        });
    });
    const generatedImages = await Promise.all(imageGenerationPromises);

    // Combine scene data with newly generated image URLs
    const scenesWithImages: Scene[] = storyboard.scenes.map((scene, index) => ({
        narration: scene.narration,
        imageUrl: generatedImages[index].imageUrl,
    }));
    
    // Step 3: Combine all narration parts into a single script
    const fullNarrationScript = storyboard.scenes.map(scene => scene.narration).join(' ');

    // Step 4: Generate a single audio file for the entire script
    const { audioDataUri } = await textToSpeech({ text: fullNarrationScript, language: input.language });
    
    // Step 5: Return the final combined output
    return {
        scenes: scenesWithImages,
        narrationAudioUrl: audioDataUri,
    };
  }
);
