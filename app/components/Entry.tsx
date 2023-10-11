'use client';

import { Entry, EntryNode } from '@/types/EntryTypes';
import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Loader from './Loader';
import Markdown from 'markdown-to-jsx';

const inter = Inter({ subsets: ['latin'] });

interface EntryProps {
  slug: string;
  data: Entry[];
}

const Entry = ({ slug, data }: EntryProps) => {
  const { language } = useContext(LanguageContext);
  const [entry, setEntry] = useState<EntryNode>();
  useEffect(() => {
    const foundEntry = data.find(entry => entry.node.slug === slug);
    foundEntry && setEntry(foundEntry.node);
  }, [data, slug]);

  return (
    <div className="layout max-lg:mt-32 mb-32 flex flex-col items-center">
      {!entry ? (
        <Loader />
      ) : (
        <>
          <section className="flex flex-col lg:flex-row-reverse lg:justify-between gap-5 max-xl:pb-5 w-full lg:h-screen border-b-2 border-secondary">
            <Image
              src={entry.featuredImage.url}
              className="lg:w-1/2 h-[350px] lg:h-full w-full object-cover"
              alt="contact us"
              width={1470}
              height={800}
            />
            <div className="flex max-lg:flex-col-reverse flex-col gap-5 lg:justify-end lg:mb-14 max-md:text-center">
              <h2 className="text-lg font-semibold">
                <div>
                  {language === 'english'
                    ? entry?.englishSubtitle
                    : entry?.spanishSubtitle}
                </div>
              </h2>
              <h1
                className={`${inter.className} text-3xl lg:text-5xl font-bold`}
              >
                {language === 'english'
                  ? entry?.englishTitle
                  : entry?.spanishTitle}
              </h1>
            </div>
          </section>
          <article className="prose lg:prose-xl prose-stone prose-headings:prose-stone layout max-w-none px-24 lg:mt-14">
            <Markdown>
              {language === 'english'
                ? entry?.englishContent.markdown
                : entry?.spanishContent.markdown}
            </Markdown>
          </article>
        </>
      )}
    </div>
  );
};

export default Entry;
