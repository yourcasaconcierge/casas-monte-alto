'use client';

import { EntryContext } from '@/context/EntryContext';
import { useContext } from 'react';
import Image from 'next/image';

const Journal = () => {
  const { entries: data } = useContext(EntryContext);

  const entries = data.slice(0, 2);

  return (
    <section>
      <h3 className="text-center text-xl capitalize mb-5">journal</h3>
      <div className="grid max-lg:grid-cols-1 lg:grid-rows-6 lg:grid-flow-col gap-32 lg:gap-32 h-[1000px] lg:h-[650px]">
        {entries?.map((entry, index) => (
          <div
            key={entry.node.slug}
            className="lg:row-start-1 lg:row-span-6 w-full"
          >
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
        ))}
        {/* <div className="lg:row-start-1 lg:row-span-6">
          <div className="bg-secondary w-full h-full mb-2"></div>
          <p>
            Unveiling the Essence of Casa de Gauchos: A <br /> Journey into
            Garibaldi&apos;s Rich Heritage
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Journal;
