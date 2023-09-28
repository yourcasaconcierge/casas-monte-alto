'use client';

import { BsArrowUpRight } from 'react-icons/bs';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import LogoSvg from './LogoSvg';
import ImageLoader from './ImageLoader';

const Footer = () => {
  const { foot } = useContext(LanguageContext);
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get('/api/landing');
      setImage(res.data.footerImages[0].node.image.url);
      setWidth(res.data.footerImages[0].node.image.width);
      setHeight(res.data.footerImages[0].node.image.height);
    };

    fetchImage();
  }, []);
  return (
    <footer className="layout max-sm:pb-5 justify-end max-sm:text-[0.6rem] lg:text-sm 2xl:text-base">
      <div className="py-5 2xl:py-8 border-t-2 border-secondary">
        <Link
          href="https://www.instagram.com/casasmontealto/"
          className="text-base group"
        >
          <span>INSTAGRAM</span>
          <BsArrowUpRight className="inline-block pb-1 group-hover:rotate-45 duration-200" />
        </Link>
      </div>
      {!image ? (
        <ImageLoader />
      ) : (
        <Image
          src={image}
          alt="villa"
          className="bg-secondary w-full h-[300px] lg:h-[500px] object-cover"
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
    </footer>
  );
};

export default Footer;
