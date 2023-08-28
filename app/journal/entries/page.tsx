'use client';

import { EntryContext } from '@/context/EntryContext';
import { useContext } from 'react';
import EntryPreview from '@/app/components/EntryPreview';
import LatestEntryPreview from '@/app/components/LatestEntryPreview';
import { LanguageContext } from '@/context/LanguageContext';

const EntriesPage = () => {
  const { entries, loading } = useContext(EntryContext);
  const { language } = useContext(LanguageContext);
  const firstEntry = entries[0];
  const restOfEntries = entries.slice(1);

  return (
    <main className="layout my-32">
      {loading ? (
        <p>Loading...</p>
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
          <section className="grid grid-cols-4 lg:grid-cols-3 gap-14">
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
    </main>
  );
};

export default EntriesPage;
