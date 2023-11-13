'use client';

import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import { motion as m } from 'framer-motion';
import ImageLoader from './ImageLoader';
import LogoSvg from './LogoSvg';
import SmallLogoSvg from './SmallLogoSvg';

const inter = Inter({ subsets: ['latin'] });

const LoadingScreen = () => {
  const { head } = useContext(LanguageContext);
  return (
    <m.div
      animate={{
        opacity: 0,
      }}
      initial={{
        opacity: 1,
      }}
      transition={{ duration: 3 }}
      className="layout max-lg:pb-8 pt-24 min-h-screen"
    >
      <div className="fixed top-0 left-0 flex items-center w-full h-[92px] text-secondary bg-primary z-50 paragraph shadow-lg">
        <div
          className={`layout lg:text-center uppercase text-xl lg:text-2xl font-bold ${inter.className}`}
        >
          casas monte alto
        </div>
      </div>
      <LogoSvg hidden />
      <SmallLogoSvg />
      <ImageLoader variant="banner" />
      <h2 className="py-5 text-sm md:text-lg 2xl:text-xl border-b-[1px] border-secondary">
        {head?.line1} <br className="max-md:hidden" /> {head?.line2}
      </h2>
    </m.div>
  );
};

export default LoadingScreen;
