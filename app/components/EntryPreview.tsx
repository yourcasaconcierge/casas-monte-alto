import { EntryMetaData } from '@/utils/EntryMetaData';
import { getRandomImage } from '@/utils/getRandomImage';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

const EntryPreview = ({
  slug,
  title,
  subtitle,
  date,
  content,
}: EntryMetaData) => {
  const image = getRandomImage();
  return (
    <div
      key={slug}
      className={`
      ${
        slug === 'aws-quickstart'
          ? 'col-span-4 lg:col-span-3'
          : 'col-span-2 lg:col-span-1'
      } flex flex-col`}
    >
      <Link href={`/journal/entry/${slug}`} className="flex flex-col gap-3">
        <img src={image} className="bg-secondary w-full h-full lg:h-[500px]" />
        <div className="flex gap-2 items-center">
          <p>Entry </p>
          <p className="font-medium text-sm lg:text-xl">{title}</p>
        </div>
      </Link>
      <article className="line-clamp-1">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};

export default EntryPreview;
