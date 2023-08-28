import { Inter } from 'next/font/google';
import { LanguageContext } from '@/context/LanguageContext';
import { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] });

const LanguageButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <button
      onClick={toggleLanguage}
      className={`uppercase flex gap-1 lg:text-xl font-bold cursor-pointer ${inter.className}`}
    >
      <span
        className={`${
          language === 'english' ? 'text-secondary' : 'text-neutral-400'
        }`}
      >
        en
      </span>
      <span className="lg:text-[80%]">|</span>
      <span
        className={`${
          language === 'spanish' ? 'text-secondary' : 'text-neutral-400'
        }`}
      >
        es
      </span>
    </button>
  );
};

export default LanguageButton;
