'use client';

import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { PropertiesContext } from '@/context/PropertiesContext';
import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

import 'swiper/css';
import 'swiper/css/scrollbar';

const Properties = () => {
  const { nav } = useContext(LanguageContext);
  const { properties } = useContext(PropertiesContext);

  const comingSoonArray = [
    {
      header: 'Coming Soon',
      text: 'More properties coming soon',
    },
    {
      header: 'Coming Soon',
      text: 'More properties coming soon',
    },
  ];

  const ComingSoonTemplate = ({
    header,
    text,
  }: {
    header: string;
    text: string;
  }) => (
    <article>
      <div
        className={`
      ${inter.className}
      bg-secondary text-primary flex items-center justify-center uppercase lg:text-8xl h-[40vh] lg:h-[80vh]`}
      >
        <p>{header}</p>
      </div>
      <div className="flex flex-col gap-2 py-5">
        <p className="text-lg lg:text-2xl">{text}</p>
      </div>
    </article>
  );

  const router = useRouter();
  return (
    <section id="properties">
      <h2 className="text-3xl lg:text-5xl mb-5 capitalize">
        {nav?.properties}
      </h2>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1.5}
        scrollbar={{ draggable: true }}
      >
        {properties.map((property, index) => (
          <SwiperSlide
            key={index}
            onClick={() => router.push(`/properties/${property.node.slug}`)}
          >
            <article className="flex flex-col w-full h-full cursor-pointer">
              <Image
                src={property.node.images[0].url}
                alt={property.node.propertyName}
                className="object-cover w-full h-[40vh] lg:h-[80vh]"
                width={1920}
                height={1080}
              />
              <div className="flex flex-col gap-2 py-5">
                <h3 className="text-lg lg:text-2xl">
                  {property.node.propertyName}
                </h3>
                <p className="max-lg:text-sm line-clamp-1">
                  {property.node.description.text}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}

        {properties.length < 3 &&
          comingSoonArray.map((property, index) => (
            <SwiperSlide key={index}>
              <ComingSoonTemplate
                header={property.header}
                text={property.text}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Properties;
