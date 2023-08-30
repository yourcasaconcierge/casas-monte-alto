'use client';

import { LanguageContext } from '@/context/LanguageContext';
import { motion as m } from 'framer-motion';
import { useAnimate, stagger } from 'framer-motion';
import { useContext, useEffect } from 'react';
import Link from 'next/link';

const staggerMenuItems = stagger(0.1, { startDelay: 0.2 });

interface MenuProps {
  open: string;
  toggle: () => void;
}

const Menu = ({ open, toggle }: MenuProps) => {
  const { nav } = useContext(LanguageContext);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement;
    if (open === 'open') {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  }, [open]);

  useEffect(() => {
    animate(
      'li',
      open === 'open' ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
      {
        duration: 0.2,
        delay: open === 'open' ? staggerMenuItems : 0,
      }
    );
  }, [animate, open]);

  return (
    <m.div
      initial={false} // Prevents initial animation
      animate={{
        opacity: open === 'open' ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
      className={`
      ${open === 'open' ? 'z-40' : '-z-10'}
      fixed top-0 w-full h-screen bg-primary flex flex-col items-center justify-center `}
    >
      <ul ref={scope} className="flex flex-col gap-5 text-3xl text-center">
        <li onClick={toggle}>
          <Link href="/about">{nav?.about}</Link>
        </li>
        <li onClick={toggle}>
          <Link href="/journal/entries">{nav?.journal}</Link>
        </li>
        <li onClick={toggle}>
          <Link href="/properties">{nav?.properties}</Link>
        </li>
        <li onClick={toggle}>
          <Link href="/contact">{nav?.contact}</Link>
        </li>
      </ul>
    </m.div>
  );
};

export default Menu;
