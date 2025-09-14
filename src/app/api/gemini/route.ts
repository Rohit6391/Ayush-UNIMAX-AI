
import {NextResponse} from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const userPrompt = body.prompt;

    if (!userPrompt) {
      return NextResponse.json(
        {error: 'Prompt is required'},
        {status: 400}
      );
    }
    
    // IMPORTANT: Do not use a real API key in this file.
    // The key is provided securely by the environment.
    const apiKey = process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
      // This is a server-side error, so we can log it.
      console.error('Gemini API Key not found in environment variables.');
      return NextResponse.json(
        {error: 'The server is not configured for AI requests. Please contact the administrator.'},
        {status: 500}
      );
    }
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          parts: [
            {
              text: userPrompt,
            },
          ],
        },
      ],
    };

    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!geminiResponse.ok) {
        const errorData = await geminiResponse.json();
        console.error('Gemini API Error:', errorData);
        return NextResponse.json(
            { error: `Gemini API Error: ${errorData.error.message}` },
            { status: geminiResponse.status }
        );
    }
    
    const result = await geminiResponse.json();
    
    return NextResponse.json(result);

  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      {error: `An internal server error occurred: ${error.message