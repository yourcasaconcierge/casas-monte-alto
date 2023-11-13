'use client';

import Image from 'next/image';

interface BannerProps {
  src: string;
  alt: string;
}

const Banner = ({ src, alt }: BannerProps) => {
  return (
    <div className="w-full h-[300px] 2xl:h-[450px] relative">
      <Image
        src={src}
        alt={alt}
        className="object-cover object-bottom transition-opacity duration-500 opacity-0"
        onLoadingComplete={image => {
          image.classList.add('opacity-100');
        }}
        fill
        sizes="(max-width: 768px) 100vw, 768px (min-width: 1024px) 100vw"
        priority
      />
    </div>
  );
};

export default Banner;
