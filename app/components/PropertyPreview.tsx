'use client';

import { GetScreenSize } from '@/hooks/getScreenSize';
import { Properties } from '@/types/PropertyTypes';
import { useData } from '@/context/DataContext';
import Image from 'next/image';
import Link from 'next/link';
import Loader from './Loader';
import HoverOverlay from './HoverOverlay';
import RotatingArrow from './RotatingArrow';

const PropertyPreview = () => {
  const { properties } = useData();
  let data = properties as Properties[];
  data.sort((a: any, b: any) => {
    return (
      new Date(b.node.publishedAt).getTime() -
      new Date(a.node.publishedAt).getTime()
    );
  });
  const dataLength = data.length;
  const isSmallerScreen = GetScreenSize() <= 1024;
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <>
          {data.map((property, index) => {
            const number = index + 1;
            const isEven = index % 2 === 0;
            const isSecondInGroupOfThree = index % 3 === 1;
            const isNotFirstInGroupOfThree = index % 3 === 0;

            return (
              <Link
                key={index}
                href={`/properties/${property.node.slug}`}
                className="flex flex-col gap-2 paragraph"
              >
                <div
                  className={`group border-secondary 
            ${number === dataLength ? 'md:border-b-[1px]' : 'border-b-[1px]'} 
            ${isSecondInGroupOfThree && 'lg:border-x-[1px]'}
            ${isEven && isSmallerScreen && 'md:border-r-[1px]'}
            relative p-24 h-full md:max-h-[546px]`}
                >
                  <HoverOverlay type="properties" />
                  <p
                    className={`absolute top-0 left-0
                ${!isNotFirstInGroupOfThree && 'lg:left-5'}
                ${!isEven && isSmallerScreen && 'md:left-5'}
                ${
                  number > 3
                    ? 'lg:top-5'
                    : number > 2
                    ? 'max-lg:top-5'
                    : number > 1
                    ? 'max-md:top-5'
                    : ''
                }
                `}
                  >
                    {number <= 9 ? '0' : ''}
                    {number} {property.node.propertyName}
                    <RotatingArrow />
                  </p>

                  <>
                    <Image
                      src={property.node.images[0].url}
                      alt={property.node.propertyName}
                      width={300}
                      height={300}
                      className="w-full object-cover aspect-square"
                      priority
                    />
                  </>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
};

export default PropertyPreview;
