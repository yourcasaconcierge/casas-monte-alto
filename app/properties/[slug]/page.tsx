'use client';

import { PropertiesContext } from '@/context/PropertiesContext';
import { PropertyNode } from '@/types/PropertyTypes';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@/app/components/Modal';

const ProperyPage = (props: any) => {
  const [modal, setModal] = useState(false);
  const [property, setProperty] = useState<PropertyNode>();
  const [src, setSrc] = useState('');
  const { properties } = useContext(PropertiesContext);
  const slug = props.params.slug;
  const featuresArray = property?.features.text.split('\\n').slice(0, -1);
  const amenitiesArray = property?.amenities.text.split('\\n').slice(0, -1);

  useEffect(() => {
    const foundProperty = properties.find(
      property => property.node.slug === slug
    );
    foundProperty && setProperty(foundProperty.node);
  }, [properties, slug]);

  return (
    <main className="my-32 layout lg:text-lg flex flex-col gap-10">
      {!property ? (
        <div>
          <h1 className="">Loading...</h1>
        </div>
      ) : (
        <>
          <h1 className="text-3xl lg:text-5xl uppercase">
            {property.propertyName}
          </h1>
          <div className=" lg:flex gap-5 lg:text-2xl">
            <p>Bedroom(s): {property.bedrooms}</p>
            <p>BathRoom(s): {property.bathrooms}</p>
          </div>
          <Image
            src={property.images[0].url}
            alt={property.propertyName}
            className="object-cover w-full h-[30vh] lg:h-[80vh]"
            width={1920}
            height={1080}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {property.images.map((image, index) => {
              return (
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
                    alt=""
                    className="object-cover w-full h-[20vh] lg:aspect-square"
                    width={1920}
                    height={1080}
                  />
                </div>
              );
            })}
          </div>
          <p>{property.description.text}</p>

          <h2 className="text-xl lg:text-3xl">Features</h2>

          {featuresArray && (
            <ul className="list-disc pl-10 ">
              {featuresArray.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}

          <h2 className="text-xl lg:text-3xl">
            Amenities <span className="text-lg">(included)</span>
          </h2>

          {amenitiesArray && (
            <ul className="list-disc pl-10 ">
              {amenitiesArray.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          )}

          <Link
            href="https://airbnb.com/h/mendozaindependencia"
            className="underline hover:no-underline"
          >
            View full listing for features and amenities
          </Link>
          <div className="flex justify-center mt-10">
            <Link
              href="https://airbnb.com/h/mendozaindependencia"
              className="bg-secondary text-primary px-5 py-3 text-lg inline-block"
            >
              Book Now
            </Link>
          </div>
        </>
      )}
      {modal && <Modal src={src} setModal={setModal} />}
    </main>
  );
};

export default ProperyPage;
