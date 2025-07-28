import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic
} from 'lucide-react';
import { ChatInterface } from '@/components/modes/ChatInterface';
import { PhotoGenerator } from '@/components/modes/PhotoGenerator';
import { PhotoEditor } from '@/components/modes/PhotoEditor';
import { VideoStoryboarder } from '@/components/modes/VideoStoryboarder';
import { CodeGenerator } from '@/components/modes/CodeGenerator';
import { TextGenerator } from '@/components/modes/TextGenerator';
import { WebsiteMaker } from '@/components/modes/WebsiteMaker';
import { AppMaker } from '@/components/modes/AppMaker';
import { GameMaker } from '@/components/modes/GameMaker';
import { FileMaker } from '@/components/modes/FileMaker';
import { FileEditor } from '@/components/modes/FileEditor';
import { Translator } from '@/components/modes/Translator';
import { SongWriter } from '@/components/modes/SongWriter';

export type ModeId = 
  | 'chat' | 'photo_generator' | 'photo_editor' | 'video_generator' | 'code_generator' 
  | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' 
  | 'file_editor' | 'story_generator' | 'summarizer' | 'translator' | 'song_writer' 
  | 'document_maker' | 'ad_maker' | 'grammar_corrector' | 'homework_helper' | 'yoga_fitness' 
  | 'games_knowledge';


export interface Mode {
    id: ModeId;
    name: string;
    icon: React.ElementType;
    description: string;
    component: React.ElementType;
    componentProps?: Record<string, any>;
}

export const modes: Mode[] = [
    { id: 'chat', name: 'Ayush Unimax AI Chat', icon: BrainCircuit, description: 'Your primary AI assistant for any question.', component: ChatInterface },
    { id: 'photo_generator', name: 'Photo Generator', icon: Image, description: 'Create stunning images from text prompts.', component: PhotoGenerator },
    { id: 'photo_editor', name: 'Photo Editor', icon: Palette, description: 'Upload a photo and edit it with an AI prompt.', component: PhotoEditor },
    { id: 'video_generator', name: 'Video Generator', icon: Video, description: 'Generate a video from a text prompt with Veo.', component: VideoStoryboarder },
    { id: 'code_generator', name: 'Code Generator', icon: Code, description: 'Generate, manage, and import code.', component: CodeGenerator },
    { id: 'code_analyzer', name: 'Code Analyzer', icon: Search, description: 'Analyze code for quality and errors.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste code here to analyze...",
        buttonText: "Analyze Code",
        Icon: Search,
        generatePrompt: (p: string) => `Analyze the following code snippet for quality, bugs, and potential improvements. Also, give an opinion on whether it appears safe or malicious. Code:\n\n${p}`,
        resultTitle: "Code Analysis"
    }},
    { id: 'website_maker', name: 'Website Maker', icon: Globe, description: 'Generate, preview, and import websites.', component: WebsiteMaker },
    { id: 'app_maker', name: 'App Maker', icon: AppWindow, description: 'Scaffold, import, and plan mobile applications.', component: AppMaker },
    { id: 'game_maker', name: 'Game Maker', icon: Gamepad2, description: 'Design, import, and create plans for your game.', component: GameMaker },
    { id: 'file_maker', name: 'File Maker', icon: FilePlus, description: 'Create downloadable files from a prompt.', component: FileMaker },
    { id: 'file_editor', name: 'File Editor', icon: FileEdit, description: 'Edit uploaded files with AI instructions.', component: FileEditor },
    { id: 'story_generator', name: 'Story Generator', icon: BookOpen, description: 'Write creative stories and scripts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., A lost robot searching for the last human on a deserted Earth...",
        buttonText: "Generate Story",
        Icon: BookOpen,
        generatePrompt: (p: string) => `Write a creative story based on the following prompt: ${p}`,
        resultTitle: "Your Story"
    }},
    { id: 'summarizer', name: 'AI Summarizer', icon: FileQuestion, description: 'Summarize long texts, articles, or documents.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste a long article, report, or any text here to get a summary...",
        buttonText: "Summarize Text",
        Icon: FileQuestion,
        generatePrompt: (p: string) => `Summarize the following text:\n\n${p}`,
        resultTitle: "Summary"
    }},
    { id: 'translator', name: 'Translator', icon: Globe, description: 'Translate text between multiple languages.', component: Translator },
    { id: 'song_writer', name: 'Song Writer & Player', icon: Mic, description: 'Generate lyrics and a matching melody.', component: SongWriter },
    { id: 'document_maker', name: 'Document Maker', icon: FileText, description: 'Draft documents, reports, and more.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., A business report on quarterly sales figures...",
        buttonText: "Generate Document",
        Icon: FileText,
        generatePrompt: (p: string) => `Create a formal document based on this request: ${p}`,
        resultTitle: "Generated Document"
    }},
    { id: 'ad_maker', name: 'Video Ad Script Maker', icon: Megaphone, description: 'Create compelling video ad scripts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., A new brand of sparkling water with natural fruit flavors...",
        buttonText: "Generate Ad Script",
        Icon: Megaphone,
        generatePrompt: (p: string) => `Write a compelling and descriptive video ad script for the following product/service, including scene descriptions, dialogue, and camera shots: ${p}`,
        resultTitle: "Video Ad Script"
    }},
    { id: 'grammar_corrector', name: 'Grammar Corrector', icon: BookCheck, description: 'Correct grammar and spelling mistakes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste your text here to correct grammar and spelling...",
        buttonText: "Correct Grammar",
        Icon: BookCheck,
        generatePrompt: (p: string) => `Correct the grammar and spelling of the following text:\n\n${p}`,
        resultTitle: "Corrected Text"
    }},
    { id: 'homework_helper', name: 'Homework Helper', icon: School, description: 'Get help with your homework assignments.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Enter your homework question here...",
        buttonText: "Get Help",
        Icon: School,
        generatePrompt: (p: string) => `Provide a helpful and detailed answer to the following homework question: ${p}`,
        resultTitle: "Answer"
    }},
    { id: 'yoga_fitness', name: 'Yoga & Fitness', icon: Wind, description: 'Get guidance on yoga and fitness exercises.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'How to do the warrior 2 pose' or 'a good 15-minute HIIT workout'...",
        buttonText: "Get Guidance",
        Icon: Wind,
        generatePrompt: (p: string) => `Provide clear, step-by-step instructions for the following yoga pose or fitness exercise: ${p}`,
        resultTitle: "Guidance"
    }},
    { id: 'games_knowledge', name: 'Games Knowledge', icon: Gamepad2, description: 'Get information and strategies for games.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Who is the main villain in Final Fantasy 7?' or 'Best strategy for early game in Stardew Valley'...",
        buttonText: "Get Info",
        Icon: Gamepad2,
        generatePrompt: (p: string) => `Provide detailed information for the following video game query: ${p}`,
        resultTitle: "Game Info"
    }},
];
