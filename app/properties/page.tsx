import type { Metadata } from 'next';
import PropertyPreview from '../components/PropertyPreview';

export const metadata: Metadata = {
  title: 'Properties',
};

const page = async () => {
  return (
    <main className="mt-32 layout grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PropertyPreview />
    </main>
  );
};

export default page;
