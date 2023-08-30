import { EntryPreview } from '@/types/EntryTypes';
import Image from 'next/image';
import Link from 'next/link';

const LatestEntryPreview = ({ slug, title, excerpt, image }: EntryPreview) => {
  return (
    <div key={slug} className={`flex flex-col relative mb-14`}>
      <Link href={`/journal/entry/${slug}`} className="flex flex-col gap-3">
        <Image
          src={image}
          className="bg-secondary w-full max-h-[500px] aspect-video object-cover"
          alt={title as string}
          width={1631}
          height={918}
          priority
        />
        <div className="lg:flex gap-2 items-center">
          <p>Entry </p>
          <p className="font-bold text-sm lg:text-lg">{title}</p>
        </div>
      </Link>
      <article className="line-clamp-1">{excerpt}</article>
    </div>
  );
};

export default LatestEntryPreview;
