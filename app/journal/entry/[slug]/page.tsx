import { Inter } from 'next/font/google';
import getEntriesMetaData from '@/utils/getEntriesMetaData';
import getEntryContent from '@/utils/getEntryContent';
import Markdown from 'markdown-to-jsx';
import EditButton from '@/app/components/button/EditButton';
import Image from 'next/image';

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
    <main className="layout max-lg:my-32 flex flex-col items-center">
      <section className="flex flex-col lg:flex-row-reverse lg:justify-between gap-5 pb-5 w-full lg:h-screen border-b-2 border-secondary">
        <Image
          src="https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="bg-secondary lg:w-1/2 h-[350px] lg:h-full w-full object-cover"
          alt="contact us"
          width={1470}
          height={800}
        />
        <div className="flex flex-col gap-5 lg:justify-end lg:mb-14">
          <h2>
            <div>{entry.data.subtitle}</div>
          </h2>
          <h1 className={`${inter.className} text-5xl font-bold`}>
            {entry.data.title}
          </h1>
        </div>
      </section>
      <article
        className="prose
        lg:prose-2xl
        prose-stone
        prose-headings:prose-stone
        layout
      "
      >
        <Markdown>{entry.content}</Markdown>
      </article>
      <EditButton />
    </main>
  );
};

export default EntryPage;
