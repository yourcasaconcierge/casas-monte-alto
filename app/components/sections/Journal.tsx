'use client';

import { Entries } from '@/types/EntryTypes';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import { useData } from '@/context/DataContext';
import Image from 'next/image';
import Link from 'next/link';

const Journal = () => {
  const { journalEntries } = useData();
  let data = journalEntries as Entries[];
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
      <div className="flex max-lg:flex-col gap-20 xl:gap-32 ">
        {entries?.map((entry) => (
          <Link
            href={`/journal/entry/${entry.node.slug}`}
            key={entry.node.slug}
            className="w-full"
          >
            <div className="relative w-full max-lg:max-h-[300px] lg:max-h-[600px] aspect-square ">
              <Image
                src={entry.node.featuredImage.url}
                alt={
                  language === 'english'
                    ? entry.node?.englishTitle
                    : entry.node?.spanishTitle
                }
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 700px (min-width: 1024px) 100vw"
              />
            </div>

            <div>
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
