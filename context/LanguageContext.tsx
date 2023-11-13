'use client';

import { createContext, useEffect, useState } from 'react';
import {
  navigation,
  header,
  contact,
  footer,
  miscellaneous,
} from '@/data/english';
import {
  navigation as navS,
  header as headS,
  contact as contS,
  footer as footS,
  miscellaneous as miscS,
} from '@/data/spanish';

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
  misc: {
    entry: string;
    latestEntry: string;
    exploreBtn: string;
    previewBtn: string;
  };
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: '',
  nav: navigation,
  head: header,
  cont: contact,
  foot: footer,
  misc: miscellaneous,
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
  const [misc, setMisc] = useState(miscellaneous);

  const toggleLanguage = () => {
    if (language === 'english') {
      setLanguage('spanish');
      localStorage.setItem('language', 'spanish');
    } else {
      setLanguage('english');
      localStorage.setItem('language', 'english');
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    if (language === 'english') {
      setNav(navigation);
      setHead(header);
      setCont(contact);
      setFoot(footer);
      setMisc(miscellaneous);
    } else {
      setNav(navS);
      setHead(headS);
      setCont(contS);
      setFoot(footS);
      setMisc(miscS);
    }
  }, [language]);

  const value = {
    language,
    nav,
    head,
    cont,
    foot,
    misc,
    toggleLanguage,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
