'use client';

import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const ContactPageContainer = () => {
  const { cont } = useContext(LanguageContext);
  const { heading, link } = cont.page;
  return (
    <div className="w-full flex flex-col gap-5 lg:gap-8 justify-center items-center max-lg:mt-14">
      <h1
        className={`${inter.className} text-5xl lg:text-8xl capitalize font-bold`}
      >
        {heading}
      </h1>
      <Link href="https://www.airbnb.ca/users/show/160604126" target="_blank">
        {link}
      </Link>
    </div>
  );
};

export default ContactPageContainer;
