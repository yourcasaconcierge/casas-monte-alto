'use client';

import { PropertiesContext } from '@/context/PropertiesContext';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PropertyPreview = () => {
  const { properties } = useContext(PropertiesContext);
  return (
    <>
      {properties.map((property, index) => (
        <Link
          href={`/properties/${property.node.slug}`}
          key={index}
          className="flex flex-col gap-2"
        >
          <Image
            src={property.node.images[0].url}
            alt={property.node.propertyName}
            width={300}
            height={300}
          />
          <p>{property.node.propertyName}</p>
        </Link>
      ))}
    </>
  );
};

export default PropertyPreview;
