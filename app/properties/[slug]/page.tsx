import type { Metadata } from 'next';
import PropertyTemplate from '@/app/components/PropertyTemplate';
import { getProperty } from '@/utils/getProperty';

type Props = {
  params: {
    slug: string;
  };
};

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const formattedTitle = slug
    .split('-')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  return {
    title: formattedTitle,
  };
}

const ProperyPage = async (props: Props) => {
  const data = await getProperty(props.params.slug);
  return (
    <main>
      <PropertyTemplate data={data} />
    </main>
  );
};

export default ProperyPage;
