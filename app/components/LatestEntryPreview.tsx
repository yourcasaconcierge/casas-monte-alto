import { EntryMetaData } from '@/utils/EntryMetaData';
import { getRandomImage } from '@/utils/getRandomImage';
import DeleteButton from './button/DeleteButton';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

const LatestEntryPreview = ({ slug, title, content }: EntryMetaData) => {
  const image = getRandomImage();
  const firstLine = content as string;
  return (
    <div key={slug} className={`flex flex-col relative mb-14`}>
      <Link href={`/journal/entry/${slug}`} className="flex flex-col gap-3">
        <Image
          src={image}
          className="bg-secondary w-full max-h-[500px] aspect-video object-cover"
          alt={title as string}
          width={500}
          height={500}
        />
        <div className="lg:flex gap-2 items-center">
          <p>Entry </p>
          <p className="font-medium text-sm lg:text-xl">{title}</p>
        </div>
      </Link>
      <article className="line-clamp-1">
        <Markdown>{firstLine}</Markdown>
      </article>
      <DeleteButton slug={slug} />
    </div>
  );
};

export default LatestEntryPreview;
