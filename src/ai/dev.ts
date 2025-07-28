'use server';
import { config } from 'dotenv';
config();

import '@/ai/flows/edit-files-from-prompt.ts';
import '@/ai/flows/generate-image-from-storyboard.ts';
import '@/ai/flows/translate-text-ai.ts';
import '@/ai/flows/chat-research-assistance.ts';
import '@/ai/flows/write-song-and-music.ts';
import '@/ai/flows/create-document-from-prompt.ts';
import '@/ai/flows/text-to-speech.ts';
import '@/ai/flows/video-generator.ts';
