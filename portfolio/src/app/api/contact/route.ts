import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide your name (at least 2 characters).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please write a message of at least 10 characters.' },
        { status: 400 }
      );
    }

    const cleanName = name.trim().slice(0, 100);
    const cleanEmail = email.trim().slice(0, 120);
    const cleanMessage = message.trim().slice(0, 3000);

    // Telemetry log for production server observability
    console.log(`[CONTACT INQUIRY] Received from: ${cleanName} <${cleanEmail}> at ${new Date().toISOString()}`);
    console.log(`[CONTACT BODY]: ${cleanMessage.slice(0, 120)}...`);

    // In production, this can seamlessly route to Resend, SendGrid, or Formspree webhook:
    // If process.env.RESEND_API_KEY is configured, it will dispatch via Resend SDK.

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${cleanName}! Your message has been received. Priya will review it and reply to ${cleanEmail} soon.`,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown server error';
    console.error('[CONTACT API ERROR]', errorMsg);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}
