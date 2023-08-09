'use client';

import Modal from '@/app/components/Modal';
import { useState } from 'react';
import { properties } from '@/utils/getProperties';
import Link from 'next/link';
import Image from 'next/image';

const Properties = (props: any) => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState('');
  const slug = props.params.slug;

  const propertiesMock = [
    {
      src: 'https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Casa de Gauchos (Garibaldi)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      src: 'https://images.unsplash.com/photo-1668957065532-5770d193d501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      title: 'Casa de Gauchos (Garibaldi)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      src: 'https://images.unsplash.com/photo-1669255034440-7d293acdd207?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
      title: 'Casa de Gauchos (Garibaldi)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      src: 'https://images.unsplash.com/photo-1634923295030-730da9900a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Casa de Gauchos (Garibaldi)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      src: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Casa de Gauchos (Garibaldi)',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
  ];

  return (
    <main className="my-32 layout lg:text-lg flex flex-col gap-10">
      <h1 className="text-3xl lg:text-5xl uppercase">{properties[0].name}</h1>
      <div className=" lg:flex gap-5 lg:text-2xl">
        <p>Bedroom(s): {properties[0].bedrooms}</p>
        <p>BathRoom(s): {properties[0].bathrooms}</p>
      </div>
      <Image
        src={propertiesMock[0].src}
        alt={propertiesMock[0].title}
        className="object-cover w-full h-[30vh] lg:h-[80vh]"
        width={1920}
        height={1080}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {propertiesMock.map((property, index) => {
          return (
            <div
              key={index}
              className="flex flex-col cursor-pointer"
              onClick={() => {
                setModal(true);
                setSrc(property.src);
              }}
            >
              <Image
                src={property.src}
                alt={property.title}
                className="object-cover w-full h-[20vh] lg:aspect-square"
                width={1920}
                height={1080}
              />
            </div>
          );
        })}
      </div>
      <p className="">{properties[0].description}</p>
      <h2 className="text-xl lg:text-3xl">Features</h2>
      <ul className="list-disc pl-10 ">
        {properties[0].features.map((feature, index) => {
          return <li key={index}>{feature}</li>;
        })}
      </ul>
      <h2 className="text-xl lg:text-3xl">
        Amenities <span className="text-lg">(included)</span>
      </h2>
      <ul className="list-disc pl-10 ">
        {properties[0].amenities.map((amenitie, index) => {
          return <li key={index}>{amenitie}</li>;
        })}
      </ul>

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

      {modal && <Modal src={src} setModal={setModal} />}
    </main>
  );
};

export default Properties;
