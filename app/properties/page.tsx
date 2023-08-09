import { properties } from '@/utils/getProperties';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <main className="my-32 layout">
      {properties.map((property, index) => {
        return (
          <Link
            href={`/properties/${property.name
              .toLowerCase()
              .replace(/ /g, '-')}`}
            key={index}
            className="flex flex-col gap-2"
          >
            <Image
              src={property.image}
              alt={property.name}
              width={200}
              height={200}
            />
            <p>{property.name}</p>
          </Link>
        );
      })}
    </main>
  );
};

export default page;
