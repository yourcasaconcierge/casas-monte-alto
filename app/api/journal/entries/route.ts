import { NextResponse } from 'next/server';
import { getClient } from '@/lib/client';
import { query } from '@/utils/getEntries';

const client = getClient();

export async function GET(req: Request) {
  const { data } = await client.query({
    query,
  });

  const entries = data.entriesConnection.edges;

  return NextResponse.json({
    message: 'Hello from /api/test',
    entries,
  });
}
