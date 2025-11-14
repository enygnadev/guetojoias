import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { items, total } = await request.json();

    // Client will access it via Server Component
    const orderId = Math.random().toString(36).substring(7).toUpperCase();

    return NextResponse.json({
      success: true,
      orderId,
      total,
      // PIX key fetched client-side via Server Component
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar checkout' },
      { status: 500 }
    );
  }
}
