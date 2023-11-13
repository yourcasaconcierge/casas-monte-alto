'use client';

import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import ImageLoader from './ImageLoader';
import Link from 'next/link';
import LogoSvg from './LogoSvg';
import RotatingArrow from './RotatingArrow';
import Banner from './Banner';

interface FooterContentProps {
  data: {
    url: string;
  };
}
const FooterContent = ({ data }: FooterContentProps) => {
  const { foot } = useContext(LanguageContext);
  const [image, setImage] = useState('');
  useEffect(() => {
    setImage(data.url);
  }, [data.url]);
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
      {!image ? (
        <ImageLoader variant="banner" />
      ) : (
        <Banner src={image} alt="Horse standing in desert field" />
      )}

      <LogoSvg footer />
      <div className="flex justify-between small-text">
        <p>{foot?.line1}</p>
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
