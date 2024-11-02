'use client';

import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import { useData } from '@/context/DataContext';
import ImageLoader from '../ImageLoader';
import LogoSvg from '../LogoSvg';
import Banner from '../Banner';

const Hero = () => {
  const { head } = useContext(LanguageContext);
  const { landingImages } = useData();
  const imageUrl = landingImages?.headerImage.url as string;

  return (
    <section className="max-lg:pb-8">
      <LogoSvg />
      {!landingImages ? (
        <ImageLoader variant="banner" />
      ) : (
        <Banner src={imageUrl} alt="View of mountains and desert" />
      )}
      <h2 className="py-5 text-sm md:text-lg 2xl:text-xl border-b-[1px] border-secondary">
        {head?.line1} <br className="max-md:hidden" /> {head?.line2}
      </h2>
    </section>
  );
};

export default Hero;
