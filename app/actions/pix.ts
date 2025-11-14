'use server';

export async function getPixKey() {
  return process.env.NEXT_PUBLIC_PIX_KEY || '';
}
