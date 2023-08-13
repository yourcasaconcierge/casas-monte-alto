'use client';

import { EntryContext } from '@/context/EntryContext';
import { EntryNode } from '@/types/EntryTypes';
import { Inter } from 'next/font/google';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

const inter = Inter({ subsets: ['latin'] });

const EntryPage = (props: any) => {
  const { entries, loading } = useContext(EntryContext);
  const [entry, setEntry] = useState<EntryNode>();
  useEffect(() => {
    const foundEntry = entries.find(
      entry => entry.node.slug === props.params.slug
    );
    foundEntry && setEntry(foundEntry.node);
  }, [entries, props.params.slug]);

  return (
    <main className="layout max-lg:mt-32 mb-32 flex flex-col items-center">
      {!entry ? (
        <div>
          <h1 className="text-5xl font-bold">Loading...</h1>
        </div>
      ) : (
        <>
          <section className="flex flex-col lg:flex-row-reverse lg:justify-between gap-5 max-xl:pb-5 w-full lg:h-screen border-b-2 border-secondary">
            {/* <Image
              src="https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              className="bg-secondary lg:w-1/2 h-[350px] lg:h-full w-full object-cover"
              alt="contact us"
              width={1470}
              height={800}
            /> */}
            <Image
              src={entry.featuredImage.url}
              className="bg-secondary lg:w-1/2 h-[350px] lg:h-full w-full object-cover"
              alt="contact us"
              width={1470}
              height={800}
            />
            <div className="flex flex-col gap-5 lg:justify-end lg:mb-14">
              <h2>
                <div>{entry.subtitle}</div>
              </h2>
              <h1 className={`${inter.className} text-5xl font-bold`}>
                {entry.title}
              </h1>
            </div>
          </section>
          <article className="prose lg:prose-xl prose-stone prose-headings:prose-stone layout max-w-none px-24 lg:mt-14">
            <Markdown>{entry.content.markdown}</Markdown>
          </article>
        </>
      )}
    </main>
  );
};

export default EntryPage;
