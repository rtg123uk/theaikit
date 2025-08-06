import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, name, phone, website, monthlySupport, package: selectedPackage, source } = await req.json();

  // Debug logs
  console.log('All env:', process.env);
  console.log('BREVO_API_KEY:', process.env.BREVO_API_KEY ? '[set]' : '[not set]');
  console.log('TEST_VAR:', process.env.TEST_VAR);
  console.log('Incoming data:', { email, name, phone, website, monthlySupport, selectedPackage, source });

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = 2;

  // Prepare contact data for Brevo
  const contactData: any = {
    email,
    listIds: [listId],
    updateEnabled: true,
  };

  // Add additional attributes if provided
  if (name) contactData.attributes = { FIRSTNAME: name };
  if (phone) contactData.attributes = { ...contactData.attributes, PHONE: phone };
  if (website) contactData.attributes = { ...contactData.attributes, WEBSITE: website };
  if (monthlySupport) contactData.attributes = { ...contactData.attributes, MONTHLY_SUPPORT: monthlySupport };
  if (selectedPackage) contactData.attributes = { ...contactData.attributes, PACKAGE: selectedPackage };
  if (source) contactData.attributes = { ...contactData.attributes, SOURCE: source };

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey!,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(contactData),
  });

  if (res.ok) {
    return NextResponse.json({ success: true });
  } else {
    const error = await res.json();
    return NextResponse.json({ error: error.message || 'Failed to subscribe.' }, { status: 400 });
  }
} 