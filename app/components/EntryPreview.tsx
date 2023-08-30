import { EntryPreview } from '@/types/EntryTypes';
import Image from 'next/image';
import Link from 'next/link';

const EntryPreview = ({ slug, title, excerpt, image }: EntryPreview) => {
  return (
    <div
      key={slug}
      className={`
      flex flex-col relative col-span-2 lg:col-span-1`}
    >
      <Link href={`/journal/entry/${slug}`} className="flex flex-col gap-3">
        <Image
          src={image}
          className="bg-secondary w-full aspect-square object-cover"
          alt={title as string}
          layout="responsive"
          width={500}
          height={500}
        />
        <div className="items-center">
          <p>Entry </p>
          <p className="font-bold text-sm lg:text-[1.04rem]">{title}</p>
        </div>
      </Link>
      <article className="line-clamp-1">{excerpt}</article>
    </div>
  );
};

export default EntryPreview;
