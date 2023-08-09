import fs from 'fs';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { slug, title, subtitle, content, date } = body;
  fs.writeFileSync(
    `journal/${slug}.md`,
    matter.stringify(content, { title, subtitle, date }),
    'utf-8'
  );

  return NextResponse.json({ message: 'Entry updated' });
}
