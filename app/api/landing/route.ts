import { NextResponse } from 'next/server';
import { getClient } from '@/lib/client';
import { query } from '@/utils/getLanding';

const client = getClient();

export async function GET(req: Request) {
  const { data } = await client.query({
    query,
  });
  const headerImages = data.headerImagesConnection.edges;
  const footerImages = data.footerImagesConnection.edges;
  return NextResponse.json({
    headerImages,
    footerImages,
  });
}
