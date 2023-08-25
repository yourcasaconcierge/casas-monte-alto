'use client';

import { EntryContext } from '@/context/EntryContext';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Journal = () => {
  const { entries: data } = useContext(EntryContext);
  const { nav } = useContext(LanguageContext);

  const entries = data.slice(0, 2);

  return (
    <section>
      <h3 className="text-center text-xl capitalize mb-5">{nav?.journal}</h3>
      <div className="flex max-lg:flex-col justify-between gap-32">
        {entries?.map((entry, index) => (
          <Link
            href={`/journal/entry/${entry.node.slug}`}
            key={entry.node.slug}
          >
            <div className="w-full">
              <Image
                src={entry.node.featuredImage.url}
                alt={entry.node.title}
                className="w-full h-full mb-2 object-cover"
                width={1000}
                height={650}
              />
              <div className="lg:flex gap-2 items-center">
                <p>Entry </p>
                <p className="font-medium text-sm lg:text-xl">
                  {entry.node.title}
                </p>
              </div>
              <article className="line-clamp-1">{entry.node.excerpt}</article>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Journal;
