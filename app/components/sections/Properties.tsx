'use client';

import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { Property } from '@/types/PropertyTypes';
import { Scrollbar, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

import 'swiper/css';
import 'swiper/css/scrollbar';

interface PropertiesProps {
  data: Property[];
}

const Properties = ({ data }: PropertiesProps) => {
  data.sort((a: any, b: any) => {
    return (
      new Date(b.node.publishedAt).getTime() -
      new Date(a.node.publishedAt).getTime()
    );
  });
  const { language, nav } = useContext(LanguageContext);
  const router = useRouter();
  const comingSoonArray = [
    {
      englishHeader: 'Coming Soon',
      englishText: 'More properties coming soon',
      spanishHeader: 'Próximamente',
      spanishText: 'Más propiedades próximamente',
    },
    {
      englishHeader: 'Coming Soon',
      englishText: 'More properties coming soon',
      spanishHeader: 'Próximamente',
      spanishText: 'Más propiedades próximamente',
    },
  ];

  return (
    <section id="properties">
      <h1 className="heading mb-10 capitalize">{nav?.properties}</h1>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1.5}
        scrollbar={{ draggable: true }}
      >
        {data.map((property, index) => (
          <SwiperSlide
            key={index}
            onClick={() => router.push(`/properties/${property.node.slug}`)}
          >
            <article className="flex flex-col w-full h-full cursor-pointer relative">
              <div className="w-full h-[40vh] lg:h-[60vh] relative">
                <Image
                  src={property.node.images[0].url}
                  alt={property.node.propertyName}
                  className="object-cover "
                  fill
                  sizes="(max-width: 768px) 100vw, 700px (min-width: 1024px) 100vw"
                />
              </div>
              <div className="flex flex-col gap-2 py-5">
                <h3 className="text-lg 2xl:text-2xl">
                  {property.node.propertyName}
                </h3>
                <p className="paragraph line-clamp-1">
                  {language === 'english'
                    ? property.node.englishDescription.markdown
                    : property.node.spanishDescription.markdown}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}

        {data.length < 3 &&
          comingSoonArray.map((property, index) => (
            <SwiperSlide key={index}>
              <ComingSoonTemplate
                header={
                  language === 'english'
                    ? property.englishHeader
                    : property.spanishHeader
                }
                text={
                  language === 'english'
                    ? property.englishText
                    : property.spanishText
                }
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Properties;

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
