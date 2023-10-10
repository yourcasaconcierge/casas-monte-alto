import type { Metadata } from 'next';
import { getProperties } from '@/utils/getProperties';
import Property from '@/app/components/Property';

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
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  return {
    title: formattedTitle,
  };
}

const ProperyPage = async (props: Props) => {
  const data = await getProperties();
  return (
    <main>
      <Property slug={props.params.slug} data={data} />
    </main>
  );
};

export default ProperyPage;
