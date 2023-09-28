'use client';

import { PropertiesContext } from '@/context/PropertiesContext';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Loader from './Loader';

const PropertyPreview = () => {
  const { properties } = useContext(PropertiesContext);
  return (
    <>
      {!properties ? (
        <Loader />
      ) : (
        <>
          {properties.map((property, index) => (
            <Link
              href={`/properties/${property.node.slug}`}
              key={index}
              className="flex flex-col gap-2"
            >
              <>
                {!property.node.images[0].url ? (
                  <div className="w-[300px] h-[200px] bg-secondary"></div>
                ) : (
                  <Image
                    src={property.node.images[0].url}
                    alt={property.node.propertyName}
                    width={300}
                    height={300}
                    className="max-md:w-full h-auto object-cover"
                    priority
                  />
                )}
              </>
              <p>{property.node.propertyName}</p>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default PropertyPreview;
