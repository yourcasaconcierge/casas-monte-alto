'use client';

import { BsArrowUpRight } from 'react-icons/bs';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoSvg from './LogoSvg';

const Footer = () => {
  const { foot } = useContext(LanguageContext);
  return (
    <footer className="layout pb-5 max-sm:text-[0.6rem]">
      <div className="py-14 border-t-2 border-secondary">
        <Link
          href="https://www.instagram.com/casasmontealto/"
          className="text-base group"
        >
          <span>INSTAGRAM</span>
          <BsArrowUpRight className="inline-block pb-1 group-hover:rotate-45 duration-200" />
        </Link>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1668585418249-f87c0f926583?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="villa"
        className="bg-secondary w-full h-[300px] lg:h-[600px] object-cover"
        width={1170}
        height={600}
      />
      <LogoSvg />
      <div className="flex justify-between">
        <p>{foot?.line1}</p>
        <Link href="/">{foot?.line2}</Link>
      </div>
    </footer>
  );
};

export default Footer;
