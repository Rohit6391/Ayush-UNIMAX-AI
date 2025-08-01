export const availableModels = [
  'gemini-1.5-flash-latest',
] as const;

export type ModelId = (typeof availableModels)[number];
