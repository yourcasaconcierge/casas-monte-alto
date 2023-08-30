'use client';

import { AboutNode } from '@/types/AboutTypes';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

interface AboutsContextProps {
  about: AboutNode;
}

export const AboutsContext = createContext<AboutsContextProps>({
  about: {
    id: '',
    englishHeaderOne: '',
    englishHeaderTwo: '',
    englishHeaderThree: '',
    englishHeaderFour: '',
    englishParagraphOne: {
      text: '',
    },
    englishParagraphTwo: {
      text: '',
    },
    imageOne: {
      url: '',
    },
    imageTwo: {
      url: '',
    },
    imageThree: {
      url: '',
    },

    spanishHeaderOne: '',
    spanishHeaderTwo: '',
    spanishHeaderThree: '',
    spanishHeaderFour: '',
    spanishParagraphOne: {
      text: '',
    },
    spanishParagraphTwo: {
      text: '',
    },
  },
});

export const AboutsProvider = ({ children }: any) => {
  const [about, setAbout] = useState({} as AboutNode);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('/api/abouts');
        setAbout(response.data.abouts[0].node);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const value = {
    about,
  };
  return (
    <AboutsContext.Provider value={value}>{children}</AboutsContext.Provider>
  );
};
