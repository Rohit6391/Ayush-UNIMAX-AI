
import {NextResponse} from 'next/server';
import { getNextApiKey } from '@/lib/api-keys';

// A in-memory map to track which keys are temporarily exhausted
const exhaustedKeys = new Map<string, number>();
const EXHAUSTION_TIMEOUT_MS = 60 * 1000; // 1 minute

export async function POST(request: Request) {
  const body = await request.json();
  const userPrompt = body.prompt;

  if (!userPrompt) {
    return NextResponse.json({error: 'Prompt is required'}, {status: 400});
  }

  for (let i = 0; i < 10; i++) { // Try up to 10 times with different keys
    const apiKey = getNextApiKey();

    if (exhaustedKeys.has(apiKey) && Date.now() < (exhaustedKeys.get(apiKey) || 0)) {
        continue; // Skip this key if it's in a timeout period
    }

    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

      const payload = {
        contents: [ { parts: [ { text: userPrompt } ] } ],
      };

      const geminiResponse = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (geminiResponse.status === 429) {
          // This key is rate-limited, mark it as exhausted and try the next one
          console.warn(`API key ending in ...${apiKey.slice(-4)} is rate-limited. Trying next key.`);
          exhaustedKeys.set(apiKey, Date.now() + EXHAUSTION_TIMEOUT_MS);
          continue; // Move to the next key
      }

      if (!geminiResponse.ok) {
        const errorData = await geminiResponse.json();
        console.error('Gemini API Error:', errorData);
        // For other errors, we might want to stop and return the error
        return NextResponse.json(
          {error: `Gemini API Error: ${errorData.error.message}`},
          {status: geminiResponse.status}
        );
      }

      const result = await geminiResponse.json();
      return NextResponse.json(result);

    } catch (error: any) {
      console.error('API Route Error:', error);
      // This is likely a network error, so we can stop.
      return NextResponse.json(
        {error: `An internal server error occurred: ${error.message}`},
        {status: 500}
      );
    }
  }

  // If we loop through all keys and all are exhausted
  return NextResponse.json(
    {error: 'All available API keys are currently rate-limited. Please try again in a minute.'},
    {status: 429}
  );
}
