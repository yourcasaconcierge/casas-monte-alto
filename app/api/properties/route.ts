import { getProperties } from '@/services';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const properties = await getProperties();

  return NextResponse.json({
    message: 'Hello from /api/properties',
    properties,
  });
}
