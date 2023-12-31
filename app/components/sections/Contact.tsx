'use client';

import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';
import Link from 'next/link';

const Contact = () => {
  const { cont } = useContext(LanguageContext);
  return (
    <section className="text-center h-screen w-full flex flex-col items-center justify-center gap-5 subheading">
      <h4 className="capitalize">{cont?.landing.heading}</h4>
      <Link href="/contact" className="paragraph bg-secondary text-primary p-3">
        {cont?.landing.button}
      </Link>
    </section>
  );
};

export default Contact;
