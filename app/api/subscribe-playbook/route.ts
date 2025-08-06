import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  // Debug logs
  console.log('Playbook subscription - Incoming email:', email);

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = 5; // Free AI Business Playbook list

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey!,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  if (res.ok) {
    return NextResponse.json({ success: true });
  } else {
    const error = await res.json();
    return NextResponse.json({ error: error.message || 'Failed to subscribe.' }, { status: 400 });
  }
} 