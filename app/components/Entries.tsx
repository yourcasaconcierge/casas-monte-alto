'use client';

import { Entry } from '@/types/EntryTypes';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import EntryPreview from './EntryPreview';
import LatestEntryPreview from './LatestEntryPreview';
import Loader from './Loader';

interface EntriesProps {
  data: Entry[];
}

const Entries = ({ data }: EntriesProps) => {
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
      {' '}
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
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
            {restOfEntries.map((entry, index) => {
              return (
                <EntryPreview
                  key={entry.node.slug}
                  slug={entry.node.slug}
                  title={
                    language === 'english'
                      ? entry.node.englishTitle
                      : entry.node.spanishTitle
                  }
                  excerpt={
                    language === 'english'
                      ? entry.node.englishExcerpt
                      : entry.node.spanishExcerpt
                  }
                  image={entry.node.featuredImage.url}
                />
              );
            })}
          </section>
        </>
      )}
    </>
  );
};

export default Entries;
