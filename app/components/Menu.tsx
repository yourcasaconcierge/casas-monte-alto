'use client';

import { motion as m } from 'framer-motion';
import { useAnimate, stagger, motion } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';

const staggerMenuItems = stagger(0.1, { startDelay: 0.2 });

interface MenuProps {
  open: string;
  toggle: () => void;
}

const Menu = ({ open, toggle }: MenuProps) => {
  const [scope, animate] = useAnimate();

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
      transition={{ duration: 0.5 }}
      className={`
      ${open === 'open' ? 'z-40' : '-z-10'}
      fixed w-full h-screen bg-primary flex flex-col items-center justify-center `}
    >
      <ul ref={scope} className="flex flex-col gap-5 text-3xl text-center">
        <li onClick={toggle}>
          <Link href="/about">About</Link>
        </li>
        <li onClick={toggle}>
          <Link href="/journal/entries">Journal</Link>
        </li>
        <li onClick={toggle}>
          <Link href="/#properties">Properties</Link>
        </li>
        <li onClick={toggle}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </m.div>
  );
};

export default Menu;
