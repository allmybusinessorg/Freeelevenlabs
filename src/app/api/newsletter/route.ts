import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Forward server-to-server to sayak-hq API to bypass browser CORS restrictions
    const response = await fetch("https://isayak007.vercel.app/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json({ error: data.error || 'Subscription failed' }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (err: any) {
    console.error("Server newsletter proxy error:", err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
