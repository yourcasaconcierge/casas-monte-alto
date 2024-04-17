import type { Metadata } from 'next';
import { getProperties } from '@/utils/getProperties';
import PropertyPreview from '../components/PropertyPreview';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Properties',
};

const page = async () => {
  const data = await getProperties();
  return (
    <main className="mt-32 layout grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PropertyPreview data={data} />
    </main>
  );
};

export default page;
