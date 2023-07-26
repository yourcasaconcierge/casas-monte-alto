import { Inter } from 'next/font/google';
import getEntriesMetaData from '@/utils/getEntriesMetaData';
import getEntryContent from '@/utils/getEntryContent';
import Markdown from 'markdown-to-jsx';

const inter = Inter({ subsets: ['latin'] });

export const generateStaticParams = async () => {
  const entries = getEntriesMetaData();
  return entries.map(entry => ({
    params: {
      slug: entry.slug,
    },
  }));
};

const EntryPage = (props: any) => {
  const slug = props.params.slug;
  const entry = getEntryContent(slug);
  return (
    <main className="layout flex flex-col items-center">
      <section className="flex h-screen w-full">
        <div className="flex flex-col justify-end w-full mb-36">
          <h2>
            <div>{entry.data.subtitle}</div>
          </h2>
          <h1 className={`${inter.className} text-5xl font-bold`}>
            {entry.data.title}
          </h1>
        </div>
        <div className="bg-secondary h-full w-full"></div>
      </section>
      <article
        className="prose
        lg:prose-2xl
        prose-stone
        prose-headings:prose-stone
      "
      >
        <Markdown>{entry.content}</Markdown>
      </article>
    </main>
  );
};

export default EntryPage;
