'use client';

import { Entries } from '@/types/EntryTypes';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import { useData } from '@/context/DataContext';
import LatestEntryPreview from './LatestEntryPreview';
import Loader from './Loader';
import ArticleHero from './ArticleHero';

const EntriesTemplate = () => {
  const { journalEntries } = useData();
  let data = journalEntries as Entries[];
  data = data.sort((a: any, b: any) => {
    return (
      new Date(b.node.publishedAt).getTime() -
      new Date(a.node.publishedAt).getTime()
    );
  });
  const { language } = useContext(LanguageContext);
  const firstEntry = data[0];
  const restOfEntries = data.slice(1);
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <>
          {firstEntry && (
            <LatestEntryPreview
              slug={firstEntry.node.slug}
              title={
                language === 'english'
                  ? firstEntry.node.englishTitle
                  : firstEntry.node.spanishTitle
              }
              excerpt={
                language === 'english'
                  ? firstEntry.node.englishExcerpt
                  : firstEntry.node.spanishExcerpt
              }
              image={firstEntry.node.featuredImage.url}
            />
          )}
          <section className="grid grid-cols-1 max-md:gap-5">
            {restOfEntries.map((entry, index) => {
              return (
                <ArticleHero
                  componentType="preview"
                  preview
                  key={entry.node.slug}
                  index={index}
                  slug={entry.node.slug}
                  imagerURL={entry.node.featuredImage.url}
                  englishTitle={entry.node.englishTitle}
                  spanishTitle={entry.node.spanishTitle}
                  englishSubtitle={entry.node.englishSubtitle}
                  spanishSubtitle={entry.node.spanishSubtitle}
                  excerpt={
                    language === 'english'
                      ? entry.node.englishExcerpt
                      : entry.node.spanishExcerpt
                  }
                />
              );
            })}
          </section>
        </>
      )}
    </>
  );
};

export default EntriesTemplate;
