import getEntryContent from '@/utils/getEntryContent';
import { NextResponse } from 'next/server';
import matter from 'gray-matter';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug') as string;
  const entry = getEntryContent(slug);
  const { data, content } = matter(entry);

  return NextResponse.json(
    {
      data,
      content,
    },
    {
      status: 200,
    }
  );
}
