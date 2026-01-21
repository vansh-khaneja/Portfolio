import { NextRequest, NextResponse } from 'next/server';
import portfolioData from '@/data/portfolio.json';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const systemPrompt = `You help visitors explore Vansh Khaneja's portfolio. Answer questions based on the data below.

PORTFOLIO DATA:
${JSON.stringify(portfolioData, null, 2)}

Guidelines:
- Answer questions about Vansh's skills, projects, experience, education, and services
- If asked about something not in the portfolio data, say you don't have that information
- Keep responses short and direct (2-3 sentences)
- Be helpful and natural, but avoid excessive praise or flattery (no "talented", "amazing", "exceptional" etc.)
- Just state facts from the portfolio without overselling
- If someone asks to contact Vansh, provide the email: ${portfolioData.personal.email}
- For project inquiries, mention his GitHub: ${portfolioData.social.github}`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
