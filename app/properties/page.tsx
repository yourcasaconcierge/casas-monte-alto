import type { Metadata } from 'next';
import { getProperties } from '@/utils/getProperties';
import PropertyPreview from '../components/PropertyPreview';

export const metadata: Metadata = {
  title: 'Properties',
};

const page = async () => {
  const data = await getProperties();
  return (
    <main className="my-32 layout gap-10 flex flex-wrap flex-grow max-md:justify-center">
      <PropertyPreview data={data} />
    </main>
  );
};

export default page;
