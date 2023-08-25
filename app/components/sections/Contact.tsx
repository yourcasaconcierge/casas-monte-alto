'use client';

import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';

const Contact = () => {
  const { cont } = useContext(LanguageContext);
  return (
    <section className="capitalize text-center h-screen w-full flex flex-col items-center justify-center gap-10 text-lg lg:text-3xl">
      <h4>{cont?.landing.heading}</h4>
      <button className="capitalize bg-secondary text-primary p-3">
        {cont?.landing.button}
      </button>
    </section>
  );
};

export default Contact;
