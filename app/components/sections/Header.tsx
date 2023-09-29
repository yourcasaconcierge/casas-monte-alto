'use client';

import { LanguageContext } from '@/context/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import LogoSvg from '../LogoSvg';
import SmallLogoSvg from '../SmallLogoSvg';
import ImageLoader from '../ImageLoader';

const Header = () => {
  const { head } = useContext(LanguageContext);
  const [image, setImage] = useState(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get('/api/landing');
      setImage(res.data.headerImages[0].node.image.url);
      setWidth(res.data.headerImages[0].node.image.width);
      setHeight(res.data.headerImages[0].node.image.height);
    };

    fetchImage();
  }, []);

  return (
    <section className="max-lg:pb-8">
      <LogoSvg hidden />
      <SmallLogoSvg />
      {!image ? (
        <ImageLoader />
      ) : (
        <Image
          src={image}
          alt="villa"
          className="bg-secondary w-full h-[300px] 2xl:h-[450px] object-cover object-bottom"
          width={width}
          height={height}
        />
      )}
      <h2 className="py-5 text-sm md:text-lg 2xl:text-xl border-b-2 border-secondary">
        {head?.line1} <br className="max-md:hidden" /> {head?.line2}
      </h2>
    </section>
  );
};

export default Header;
