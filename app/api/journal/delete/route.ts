import fs from 'fs';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
  const body = await req.json();
  const { slug } = body;
  try {
    const deletedFile = fs.unlinkSync(`journal/${slug}.md`);
  } catch (error) {
    return NextResponse.json({ message: 'Entry not found' });
  }
  return NextResponse.json({ message: 'Entry deleted' });
}
