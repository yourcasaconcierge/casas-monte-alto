'use client';

import { createContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const EntryContext = createContext({
  slug: '',
  setSlug: (slug: string) => {},
  title: '',
  setTitle: (title: string) => {},
  subtitle: '',
  setSubtitle: (subtitle: string) => {},
  content: '',
  setContent: (content: string) => {},
  date: '',
  setDate: (date: string) => {},
});

export const EntryProvider = ({ children }: any) => {
  const pathname = usePathname();
  const [slug, setSlug] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (pathname.includes('/journal/entry')) {
      setSlug(pathname.split('/')[3]);
    } else {
      setSlug('/');
    }
  }, [pathname]);

  const value = {
    slug,
    setSlug,
    title,
    setTitle,
    subtitle,
    setSubtitle,
    content,
    setContent,
    date,
    setDate,
  };

  return (
    <EntryContext.Provider value={value}>{children}</EntryContext.Provider>
  );
};
