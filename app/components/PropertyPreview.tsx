'use client';

import { Property } from '@/types/PropertyTypes';
import Image from 'next/image';
import Link from 'next/link';
import Loader from './Loader';
import ImageLoader from './ImageLoader';

interface PropertyPreviewProps {
  data: Property[];
}

const PropertyPreview = ({ data }: PropertyPreviewProps) => {
  data.sort((a: any, b: any) => {
    return (
      new Date(b.node.publishedAt).getTime() -
      new Date(a.node.publishedAt).getTime()
    );
  });
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <>
          {data.map((property, index) => (
            <Link
              href={`/properties/${property.node.slug}`}
              key={index}
              className="flex flex-col gap-2"
            >
              <>
                {!property.node.images[0].url ? (
                  <ImageLoader
                    className="max-md:w-full h-[200px] "
                  />
                ) : (
                  <Image
                    src={property.node.images[0].url}
                    alt={property.node.propertyName}
                    width={300}
                    height={300}
                    className="max-md:w-full h-[200px] object-cover"
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
