import { NextResponse } from 'next/server';
import { getClient } from '../../../lib/client';
import { query } from '@/utils/getProperties';

const client = getClient();

export async function GET(req: Request) {
  const { data } = await client.query({ query });

  const properties = data.propertiesConnection.edges;
  return NextResponse.json({
    message: 'Hello from /api/properties',
    properties,
  });
}
