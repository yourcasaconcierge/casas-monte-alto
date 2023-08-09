import EntryPreview from '@/app/components/EntryPreview';
import LatestEntryPreview from '@/app/components/LatestEntryPreview';
import EditButton from '@/app/components/button/EditButton';
import getEntriesMetaData from '@/utils/getEntriesMetaData';

const EntriesPage = () => {
  const entryMetaData = getEntriesMetaData();
  const filteredEntryByDate = entryMetaData.sort((a, b) => {
    return (
      new Date(b.date as string).getTime() -
      new Date(a.date as string).getTime()
    );
  });
  const firstEntry = filteredEntryByDate.shift();

  return (
    <main className="layout my-32">
      <LatestEntryPreview {...firstEntry} />
      <section className="grid grid-cols-4 lg:grid-cols-3 gap-14">
        {filteredEntryByDate.map((entry, index) => {
          return <EntryPreview key={entry.slug} {...entry} />;
        })}
      </section>
      <EditButton />
    </main>
  );
};

export default EntriesPage;
