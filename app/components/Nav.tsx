'use client';

import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext, useState } from 'react';
import LanguageButton from './LanguageButton';
import Link from 'next/link';
import Menu from './Menu';

const inter = Inter({ subsets: ['latin'] });

const Nav = () => {
  const [isOpen, setIsOpen] = useState('close');
  const { nav } = useContext(LanguageContext);
  const toggleMenu = () => {
    isOpen === 'close' ? setIsOpen('open') : setIsOpen('close');
  };

  return (
    <>
      <nav
        className={`
        ${isOpen === 'open' ? '' : 'shadow-lg'}
        fixed top-0 left-0 w-full py-8 text-secondary bg-primary z-50 paragraph`}
      >
        <div className="flex justify-between items-center layout">
          <div className="hidden lg:flex gap-3">
            <Link href="/about">{nav?.about}</Link>
            <Link href="/journal/entries">{nav?.journal}</Link>
            <Link href="/contact">{nav?.contact}</Link>
          </div>
          <Link
            href="/"
            className={`uppercase lg:absolute text-xl lg:text-2xl font-bold lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 ${inter.className}`}
          >
            casas monte alto
          </Link>

          <div className="flex gap-5">
            <LanguageButton />

            <Link
              href="/properties"
              className="hidden lg:block w-[105.06px] text-center"
            >
              {nav?.properties}
            </Link>
            {/* Menu Btn */}
            <div
              onClick={toggleMenu}
              className="menu-btn cursor-pointer lg:hidden"
            >
              <div className={`${isOpen} closed bg-secondary`}></div>
              <div className={`${isOpen} closed bg-secondary`}></div>
            </div>
          </div>
        </div>
      </nav>
      <Menu open={isOpen} toggle={toggleMenu} />
    </>
  );
};

export default Nav;
