import { EntryPreview } from '@/types/EntryTypes';
import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import HoverOverlay from './HoverOverlay';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const LatestEntryPreview = ({ slug, title, excerpt, image }: EntryPreview) => {
  const { misc } = useContext(LanguageContext);
  return (
    <div key={slug} className={`flex flex-col pb-10`}>
      <h1 className="heading capitalize mb-10">{misc.latestEntry}</h1>
      <Link href={`/journal/entry/${slug}`} className="flex flex-col gap-5">
        <div className="group relative w-full max-h-[400px] aspect-video">
          <Image
            src={image}
            className="w-full h-full object-cover"
            alt={title as string}
            width={1631}
            height={918}
            priority
          />
          <HoverOverlay type="entry" />
        </div>
        <h2 className={`${inter.className} subheading font-medium`}>{title}</h2>
        <article className="paragraph line-clamp-1">{excerpt}</article>
      </Link>
    </div>
  );
};

export default LatestEntryPreview;
