import type { Metadata } from 'next';
import PropertyTemplate from '@/app/components/PropertyTemplate';

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
  return (
    <main>
      <PropertyTemplate slug={props.params.slug} />
    </main>
  );
};

export default ProperyPage;
