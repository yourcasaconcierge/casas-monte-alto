import type { Metadata } from 'next';
import PropertyPreview from '../components/PropertyPreview';

export const metadata: Metadata = {
  title: 'Properties',
};

const page = () => {
  return (
    <main className="my-32 layout">
      <PropertyPreview />
    </main>
  );
};

export default page;
