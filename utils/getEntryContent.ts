import fs from 'fs';
import matter from 'gray-matter';

const getEntryContent = (slug: string) => {
  const folder = 'journal/';
  const file = `${folder}${slug}.md`;
  const contents = fs.readFileSync(file, 'utf8');
  const matterResult = matter(contents);
  return matterResult;
};

export default getEntryContent;
