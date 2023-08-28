'use client';

import { createContext, useEffect, useState } from 'react';
import { navigation, header, contact, footer, aboutPage } from '@/data/english';
import {
  navigation as navS,
  header as headS,
  contact as contS,
  footer as footS,
  aboutPage as aboutPageS,
} from '@/data/spanish';
import ClientOnly from '@/app/components/ClientOnly';

interface LanguageContextProps {
  language: string;
  nav: {
    about: string;
    journal: string;
    contact: string;
    properties: string;
  };
  head: {
    line1: string;
    line2: string;
  };
  cont: {
    landing: {
      heading: string;
      button: string;
    };
    page: {
      heading: string;
      link: string;
    };
  };
  foot: {
    line1: string;
    line2: string;
  };
  about: {
    section1: {
      line1: string;
      line2: string;
    };
    section2: {
      heading: string;
      paragraph: string;
    };
    section3: {
      paragraph: string;
    };
    section4: {
      heading: string;
      paragraph: string;
    }[];
  };
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: '',
  nav: navigation,
  head: header,
  cont: contact,
  foot: footer,
  about: aboutPage,
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: any) => {
  const languageStorage =
    typeof window !== 'undefined' && localStorage.getItem('language');
  const languageNavigator =
    typeof window !== 'undefined' &&
    navigator?.language.toLowerCase().startsWith('es')
      ? 'spanish'
      : 'english';
  const [language, setLanguage] = useState(
    languageStorage || languageNavigator
  );
  const [nav, setNav] = useState(navigation);
  const [head, setHead] = useState(header);
  const [cont, setCont] = useState(contact);
  const [foot, setFoot] = useState(footer);
  const [about, setAbout] = useState(aboutPage);

  const toggleLanguage = () => {
    if (language === 'english') {
      setLanguage('spanish');
      localStorage.setItem('language', 'spanish');
    } else {
      setLanguage('english');
      localStorage.setItem('language', 'english');
    }
  };

  useEffect(() => {
    if (language === 'english') {
      setNav(navigation);
      setHead(header);
      setCont(contact);
      setFoot(footer);
      setAbout(aboutPage);
    } else {
      setNav(navS);
      setHead(headS);
      setCont(contS);
      setFoot(footS);
      setAbout(aboutPageS);
    }
  }, [language]);

  const value = {
    language,
    nav,
    head,
    cont,
    foot,
    about,
    toggleLanguage,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
