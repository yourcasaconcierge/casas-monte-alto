'use client';

import { LanguageContext } from '@/context/LanguageContext';
import { Property } from '@/types/PropertyTypes';
import { useContext, useState } from 'react';
import Loader from './Loader';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import Markdown from 'markdown-to-jsx';
import ContentDivider from './ContentDivider';

interface PropertyProps {
  data: Property;
}

const PropertyTemplate = ({ data: property }: PropertyProps) => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState('');
  const { language } = useContext(LanguageContext);
  const featuresArray = (language: string) => {
    if (language === 'english') {
      return property?.englishFeatures.text.split('\\n').slice(0, -1);
    } else {
      return property?.spanishFeatures.text.split('\\n').slice(0, -1);
    }
  };

  const amenitiesArray = (language: string) => {
    if (language === 'english') {
      return property?.englishAmenities.text.split('\\n').slice(0, -1);
    } else {
      return property?.spanishAmenities.text.split('\\n').slice(0, -1);
    }
  };

  return (
    <div className="my-32 layout lg:text-lg flex flex-col ">
      {!property ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-3xl lg:text-5xl uppercase">
            {property.propertyName}
          </h1>
          <div className="lg:flex gap-5 lg:text-2xl">
            <p>
              {language === 'english' ? 'Bedroom(s)' : 'Dormitorio(s)'}:{' '}
              {property.bedrooms}
            </p>
            <p>
              {language === 'english' ? 'Bathroom(s)' : 'Baño(s)'}:{' '}
              {property.bathrooms}
            </p>
          </div>
          <ContentDivider />
          <Image
            src={property.images[0].url}
            alt={property.propertyName}
            className="object-cover w-full h-[30vh] lg:h-[500px]"
            width={1280}
            height={1080}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {property.images.map((image, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex flex-col cursor-pointer"
                    onClick={() => {
                      setModal(true);
                      setSrc(image.url);
                    }}
                  >
                    <Image
                      src={image.url}
                      alt="Room(s)"
                      className="object-cover aspect-square bg-neutral-500 animate animate-pulse"
                      onLoadingComplete={(image) => {
                        image.classList.remove('animate-pulse');
                      }}
                      width={1920}
                      height={1080}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <ContentDivider />
          <article>
            <Markdown>
              {language === 'english'
                ? property.englishDescription.markdown
                : property.spanishDescription.markdown}
            </Markdown>
          </article>
          <ContentDivider />
          <h2 className="text-xl lg:text-3xl">
            {language === 'english' ? 'Features' : 'Características'}
          </h2>

          {featuresArray && (
            <ul className="list-disc pl-10 ">
              {featuresArray(language)?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}

          <h2 className="text-xl lg:text-3xl">
            {language === 'english' ? 'Amenities' : 'Servicios'}{' '}
            <span className="text-lg">
              {language === 'english' ? '(included)' : '(incluidos)'}
            </span>
          </h2>

          {amenitiesArray && (
            <ul className="list-disc pl-10 ">
              {amenitiesArray(language)?.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
              <li className="list-none">
                {language === 'english' ? 'And more!' : 'Y mucho más!'}
              </li>
            </ul>
          )}

          <Link
            href={property.featuresAndAmenitiesLink}
            className="underline hover:no-underline"
          >
            {language === 'english'
              ? 'View full listing for features and amenities'
              : 'Ver listado completo de características y servicios'}
          </Link>
          <div className="flex justify-center mt-10">
            <Link
              href={property.postingLink}
              className="bg-secondary text-primary px-5 py-3 text-lg inline-block"
            >
              {language === 'english' ? 'Book Now' : 'Reservar'}
            </Link>
          </div>
        </>
      )}
      {modal && <Modal src={src} setModal={setModal} />}
    </div>
  );
};

export default PropertyTemplate;
