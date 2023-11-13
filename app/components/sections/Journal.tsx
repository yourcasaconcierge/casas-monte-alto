'use client';

import { Entry } from '@/types/EntryTypes';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface EntriesProps {
  data: Entry[];
}

const Journal = ({ data }: EntriesProps) => {
  data = data.sort((a: any, b: any) => {
    return (
      new Date(b.node.publishedAt).getTime() -
      new Date(a.node.publishedAt).getTime()
    );
  });
  const { language, nav } = useContext(LanguageContext);
  const entries = data.slice(0, 2);
  return (
    <section>
      <h3 className="text-center text-xl capitalize mb-14">{nav?.journal}</h3>
      <div className="flex max-lg:flex-col justify-between gap-20 lg:gap-32 w-full">
        {entries?.map((entry, index) => (
          <Link
            href={`/journal/entry/${entry.node.slug}`}
            key={entry.node.slug}
          >
            <Image
              src={entry.node.featuredImage.url}
              alt={
                language === 'english'
                  ? entry.node?.englishTitle
                  : entry.node?.spanishTitle
              }
              className="w-full h-full mb-2 object-cover"
              width={1000}
              height={650}
            />
            <div className="max-w-[796.63px]">
              <p>{language === 'english' ? 'Entry' : 'Entrada'}</p>
              <p className="font-bold paragraph">
                {language === 'english'
                  ? entry.node?.englishTitle
                  : entry.node?.spanishTitle}
              </p>
              <p className="paragraph line-clamp-1">
                {language === 'english'
                  ? entry.node?.englishExcerpt
                  : entry.node?.spanishExcerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Journal;
