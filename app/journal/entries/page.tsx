'use client';

import { EntryContext } from '@/context/EntryContext';
import { useContext } from 'react';
import EntryPreview from '@/app/components/EntryPreview';
import LatestEntryPreview from '@/app/components/LatestEntryPreview';

const EntriesPage = () => {
  const { entries, loading } = useContext(EntryContext);
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
              title={firstEntry.node.title}
              excerpt={firstEntry.node.excerpt}
              image={firstEntry.node.featuredImage.url}
            />
          )}
          <section className="grid grid-cols-4 lg:grid-cols-3 gap-14">
            {restOfEntries.map((entry, index) => {
              return (
                <EntryPreview
                  key={entry.node.slug}
                  slug={entry.node.slug}
                  title={entry.node.title}
                  excerpt={entry.node.excerpt}
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
