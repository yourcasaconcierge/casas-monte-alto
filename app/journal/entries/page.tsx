import type { Metadata } from 'next';
import Entries from '@/app/components/Entries';

export const metadata: Metadata = {
  title: 'Journal',
};

const EntriesPage = () => {
  return (
    <main className="layout my-32">
      <Entries />
    </main>
  );
};

export default EntriesPage;
