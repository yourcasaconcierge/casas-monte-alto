import { NextResponse } from 'next/server';
import { getClient } from '@/lib/client';
import { query } from '@/utils/getAbouts';

const client = getClient();

export async function GET(req: Request) {
  const { data } = await client.query({
    query,
  });

  const abouts = data.aboutsConnection.edges;
  return NextResponse.json({
    message: 'Hello from /api/about',
    abouts,
  });
}
