import { NextResponse } from 'next/server';
import { getEntries } from '../../../../services/index';

export async function GET(req: Request) {
  const entries = await getEntries();

  return NextResponse.json({
    message: 'Hello from /api/test',
    entries,
  });
}
