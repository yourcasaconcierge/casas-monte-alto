'use client';

import { LanguageContext } from '@/context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import ImageLoader from '../ImageLoader';
import LogoSvg from '../LogoSvg';
import Banner from '../Banner';

interface HeaderProps {
  data: {
    url: string;
  };
}

const Hero = ({ data }: HeaderProps) => {
  const { head } = useContext(LanguageContext);
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(data.url);
  }, [data.url]);

  return (
    <section className="max-lg:pb-8">
      <LogoSvg />
      {!image ? (
        <ImageLoader variant="banner" />
      ) : (
        <Banner src={image} alt="View of mountains and desert" />
      )}
      <h2 className="py-5 text-sm md:text-lg 2xl:text-xl border-b-[1px] border-secondary">
        {head?.line1} <br className="max-md:hidden" /> {head?.line2}
      </h2>
    </section>
  );
};

export default Hero;
