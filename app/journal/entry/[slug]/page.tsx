import type { Metadata } from 'next';
import { getEntries } from '@/utils/getEntries';
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

const EntryPage = async (props: Params) => {
  const data = await getEntries();
  return (
    <main>
      <Entry slug={props.params.slug} data={data} />
    </main>
  );
};

export default EntryPage;
