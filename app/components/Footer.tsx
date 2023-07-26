import casamontealto from '../../public/images/CASAS MONTE ALTO.png';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import LogoSvg from './LogoSvg';

const Footer = () => {
  return (
    <footer className="layout pb-5 max-sm:text-[0.6rem]">
      <div className="py-14 border-t-2 border-secondary">
        <Link href="/" className="text-base">
          <span>INSTAGRAM</span>
          <BsArrowUpRight className="inline-block" />
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1668585418249-f87c0f926583?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="villa"
        className="bg-secondary w-full h-[300px] lg:h-[600px] object-cover"
      />
      <LogoSvg />
      <div className="flex justify-between">
        <p>© 2023 CASAS MONTE ALTO. All rights reserved.</p>
        <p>Credits</p>
      </div>
    </footer>
  );
};

export default Footer;
