import { NextResponse } from 'next/server';
import { getProperties } from '@/utils/getProperties';

export async function GET() {
  const properties = await getProperties();
  return NextResponse.json(properties);
}
