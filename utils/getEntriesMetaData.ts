import fs from 'fs';
import matter from 'gray-matter';
import { EntryMetaData } from '@/utils/EntryMetaData';

const getEntriesMetaData = (): EntryMetaData[] => {
  const folder = 'journal/';
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter(file => file.endsWith('.md'));

  const entry = markdownPost.map(file => {
    const fileContents = fs.readFileSync(`${folder}${file}`, 'utf8');
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      content: matterResult.content,
      slug: file.replace('.md', ''),
    };
  });

  return entry;
};

export default getEntriesMetaData;
