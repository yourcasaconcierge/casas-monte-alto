import type { Metadata } from 'next';
import { getEntries } from '@/utils/getEntries';
import Entries from '@/app/components/Entries';

export const metadata: Metadata = {
  title: 'Journal',
};

const EntriesPage = async () => {
  const data = await getEntries();
  return (
    <main className="layout mt-32">
      <Entries data={data} />
    </main>
  );
};

export default EntriesPage;
