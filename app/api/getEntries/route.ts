import { NextResponse } from 'next/server';
import { getEntries } from '@/utils/getEntries';

export async function GET() {
  const entries = await getEntries();
  return NextResponse.json(entries);
}
