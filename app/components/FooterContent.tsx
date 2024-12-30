'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { useData } from '@/context/DataContext';
import ImageLoader from './ImageLoader';
import Link from 'next/link';
import LogoSvg from './LogoSvg';
import RotatingArrow from './RotatingArrow';
import Banner from './Banner';

const FooterContent = () => {
  const { foot } = useContext(LanguageContext);
  const { landingImages } = useData();
  const date = new Date();
  const imageUrl = landingImages?.headerImage.url as string;

  return (
    <div className="layout pb-5 justify-end paragraph">
      <div className="py-8 border-t-[1px] border-secondary">
        <Link
          href="https://www.instagram.com/casasmontealto/"
          className=" group"
        >
          <span>INSTAGRAM</span>
          <RotatingArrow />
        </Link>
      </div>
      {!landingImages ? (
        <ImageLoader variant="banner" />
      ) : (
        <Banner footer src={imageUrl} alt="Horse standing in desert field" />
      )}

      <LogoSvg footer />
      <div className="flex justify-between small-text">
        <p>
          © {date.getFullYear()} {foot?.line1}
        </p>
        <Link
          href="https://www.linkedin.com/in/terel-phillips/"
          target="_blank"
        >
          {foot?.line2}
        </Link>
      </div>
    </div>
  );
};

export default FooterContent;
