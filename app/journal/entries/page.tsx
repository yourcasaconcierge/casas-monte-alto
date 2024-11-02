import type { Metadata } from 'next';
import Entries from '@/app/components/Entries';

export const metadata: Metadata = {
  title: 'Journal',
};

const EntriesPage = async () => {
  return (
    <main className="layout mt-32">
      <Entries />
    </main>
  );
};

export default EntriesPage;
