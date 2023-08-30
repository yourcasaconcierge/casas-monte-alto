import type { Metadata } from 'next';
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

const ProperyPage = (props: Props) => {
  return (
    <main>
      <Property slug={props.params.slug} />
    </main>
  );
};

export default ProperyPage;
