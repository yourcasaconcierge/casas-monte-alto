import fs from 'fs';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST() {
  const slug = `${uuidv4()}`;
  const path = `journal/${slug}.md`;
  const frontmatter = {
    title: 'New entry',
    subtitle: 'New entry subtitle',
    date: new Date().toISOString(),
  };
  const content = `# Lorem Ipsum
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    `;

  const contentWithFrontmatter = matter.stringify(content, frontmatter);
  fs.writeFileSync(path, contentWithFrontmatter);
  return NextResponse.json({ slug });
}
