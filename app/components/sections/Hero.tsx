'use client';

import { LanguageContext } from '@/context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import ImageLoader from '../ImageLoader';
import LogoSvg from '../LogoSvg';
import SmallLogoSvg from '../SmallLogoSvg';

interface HeaderProps {
  data: {
    url: string;
    width: number;
    height: number;
  };
}

const Hero = ({ data }: HeaderProps) => {
  const { head } = useContext(LanguageContext);
  const [image, setImage] = useState('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setImage(data.url);
    setWidth(data.width);
    setHeight(data.height);
  }, [data.height, data.url, data.width]);

  return (
    <section className="max-lg:pb-8">
      <LogoSvg hidden />
      <SmallLogoSvg />
      {!image ? (
        <ImageLoader variant="banner" />
      ) : (
        <Image
          src={image}
          alt="villa"
          className="w-full h-[300px] 2xl:h-[450px] object-cover object-bottom transition-opacity duration-500 opacity-0"
          onLoadingComplete={image => {
            image.classList.add('opacity-100');
          }}
          width={width}
          height={height}
        />
      )}
      <h2 className="py-5 text-sm md:text-lg 2xl:text-xl border-b-[1px] border-secondary">
        {head?.line1} <br className="max-md:hidden" /> {head?.line2}
      </h2>
    </section>
  );
};

export default Hero;
