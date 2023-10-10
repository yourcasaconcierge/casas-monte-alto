'use client';

import React, { useContext, useEffect, useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { LanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import ImageLoader from './ImageLoader';
import Link from 'next/link';
import LogoSvg from './LogoSvg';

interface FooterContentProps {
  data: {
    url: string;
    width: number;
    height: number;
  };
}
const FooterContent = ({ data }: FooterContentProps) => {
  const { foot } = useContext(LanguageContext);
  const [image, setImage] = useState('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setImage(data.url);
    setWidth(data.width);
    setHeight(data.height);
  }, [data.height, data.url, data.width]);
  return (
    <div className="layout pb-5 justify-end max-sm:text-[0.6rem] 2xl:text-base">
      <div className="py-8 border-t-2 border-secondary">
        <Link
          href="https://www.instagram.com/casasmontealto/"
          className="text-base group"
        >
          <span>INSTAGRAM</span>
          <BsArrowUpRight className="inline-block pb-1 group-hover:rotate-45 duration-200" />
        </Link>
      </div>
      {!image ? (
        <ImageLoader variant="banner" />
      ) : (
        <Image
          src={image}
          alt="villa"
          className="w-full h-[300px] 2xl:h-[450px] object-cover transition-opacity duration-500 opacity-0"
          onLoadingComplete={image => {
            image.classList.add('opacity-100');
          }}
          width={width}
          height={height}
        />
      )}

      <LogoSvg />
      <div className="flex justify-between">
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
