'use client';

import { Entry, EntryNode } from '@/types/EntryTypes';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import { useData } from '@/context/DataContext';
import Loader from './Loader';
import Markdown from 'markdown-to-jsx';
import ArticleHero from './ArticleHero';

interface EntryProps {
  slug: string;
}

const EntryTemplate = ({ slug }: EntryProps) => {
  const { journalEntries } = useData();
  const { language } = useContext(LanguageContext);
  const [entry, setEntry] = useState<EntryNode>();
  const data = journalEntries as Entry[];
  useEffect(() => {
    const foundEntry = data.find((entry) => entry.node.slug === slug);
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

export default EntryTemplate;
