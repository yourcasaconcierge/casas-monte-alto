'use client';

import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Scrollbar, A11y } from 'swiper/modules';
import { useRouter } from 'next/navigation';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Properties = () => {
  const properties = [
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

  const router = useRouter();
  return (
    <section id="properties">
      <h2 className="text-3xl lg:text-5xl mb-5">Properties</h2>
      <Swiper
        modules={[Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1.5}
        scrollbar={{ draggable: true }}
      >
        {properties.map((property, index) => (
          <SwiperSlide
            key={index}
            onClick={() => router.push(`/properties/${property.title}`)}
          >
            <article className="flex flex-col w-full h-full cursor-pointer">
              <Image
                src={property.src}
                alt={property.title}
                className="object-cover w-full h-[40vh] lg:h-[80vh]"
                width={1920}
                height={1080}
              />
              <div className="flex flex-col gap-2 py-5">
                <h3 className="text-2xl">{property.title}</h3>
                <p>{property.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Properties;

{
  /* <div className="grid lg:grid-rows-2 lg:grid-flow-col max-lg:grid-cols-1 lg:gap-x-20 lg:gap-y-0 gap-20 h-[60rem] lg:h-[650px]">
<div className="lg:row-span-3 flex flex-col gap-2">
  <div className="bg-secondary w-full h-full"></div>
  <p>Casa de Gauchos (Garibadli)</p>
</div>
<div className="lg:col-span-2 flex flex-col gap-2">
  <div className="bg-secondary w-full h-full"></div>
  <p>Casa de Gauchos (Garibadli)</p>
</div>
<div className="lg:col-span-2 lg:mt-5 flex flex-col gap-2">
  <div className="bg-secondary w-full h-full "></div>
  <p>Casa de Gauchos (Garibadli)</p>
</div>
</div> */
}
