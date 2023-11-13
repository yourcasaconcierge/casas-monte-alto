'use client';

import { Entry, EntryNode } from '@/types/EntryTypes';
import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Loader from './Loader';
import Markdown from 'markdown-to-jsx';
import ArticleHero from './ArticleHero';

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
          <ArticleHero
            componentType="entry"
            preview
            key={entry.slug}
            index={0}
            slug={entry.slug}
            imagerURL={entry.featuredImage.url}
            englishTitle={entry.englishTitle}
            spanishTitle={entry.spanishTitle}
            englishSubtitle={entry.englishSubtitle}
            spanishSubtitle={entry.spanishSubtitle}
            excerpt={
              language === 'english'
                ? entry.englishExcerpt
                : entry.spanishExcerpt
            }
          />
          <section>
            <article className="prose lg:prose-xl prose-stone prose-headings:prose-stone layout max-w-none px-24 lg:mt-14">
              <Markdown>
                {language === 'english'
                  ? entry?.englishContent.markdown
                  : entry?.spanishContent.markdown}
              </Markdown>
            </article>
          </section>
        </>
      )}
    </div>
  );
};

export default Entry;
