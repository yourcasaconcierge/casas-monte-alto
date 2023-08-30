import type { Metadata } from 'next';
import Entry from '@/app/components/Entry';

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

const EntryPage = (props: Params) => {
  return (
    <main>
      <Entry slug={props.params.slug} />
    </main>
  );
};

export default EntryPage;
