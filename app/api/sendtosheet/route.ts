// app/api/sendtosheet/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
      
      const body = await req.json();
      console.log(body)

    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxpgCRvRcbPTbHyOQ8T9qIMXUd8NWOiKfwLji7IkqHYIFVtDOy__-w-ufV8oi05C1qrqQ/exec';

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Proxy Error:", error.message);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
