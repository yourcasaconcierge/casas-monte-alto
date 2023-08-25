'use client';

import { English, Spanish } from '@/types/AboutTypes';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

interface AboutsContextProps {
  englishAbout: English;
  spanishAbout: Spanish;
  loading: boolean;
}

export const AboutsContext = createContext<AboutsContextProps>({
  englishAbout: {
    text: '',
  },
  spanishAbout: {
    text: '',
  },
  loading: true,
});

export const AboutsProvider = ({ children }: any) => {
  const [englishAbout, setEnglishAbout] = useState<English>({
    text: '',
  });
  const [spanishAbout, setSpanishAbout] = useState<Spanish>({
    text: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/abouts');
        console.log('abouts', response.data.abouts[0].node);
        setEnglishAbout(response.data.abouts[0].node.english);
        setSpanishAbout(response.data.abouts[0].node.spanish);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const value = {
    englishAbout,
    spanishAbout,
    loading,
  };
  return (
    <AboutsContext.Provider value={value}>{children}</AboutsContext.Provider>
  );
};
