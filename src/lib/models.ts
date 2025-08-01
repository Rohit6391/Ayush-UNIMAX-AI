export const availableModels = [
  'gemini-1.5-flash-latest',
  'gemini-2.5-pro-latest',
  'gemini-2.5-flash-latest',
] as const;

export type ModelId = (typeof availableModels)[number];
