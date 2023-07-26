import EntryPreview from '@/app/components/EntryPreview';
import getEntriesMetaData from '@/utils/getEntriesMetaData';

const EntriesPage = () => {
  const entryMetaData = getEntriesMetaData();
  const entryPreview = entryMetaData.map(entry => {
    return <EntryPreview key={entry.slug} {...entry} />;
  });
  return (
    <main className="layout my-32">
      <section className="grid grid-cols-4 lg:grid-cols-3 gap-14">
        {entryPreview}
      </section>
    </main>
  );
};

export default EntriesPage;
