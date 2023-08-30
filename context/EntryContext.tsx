'use client';

import { createContext, useEffect, useState } from 'react';
import { Entry } from '@/types/EntryTypes';
import axios from 'axios';

interface EntryContextProps {
  entries: Entry[];
  loading: boolean;
}

export const EntryContext = createContext<EntryContextProps>({
  entries: [],
  loading: true,
});

export const EntryProvider = ({ children }: any) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/journal/entries');
        const filterEntriesByDate = response.data.entries.sort(
          (a: any, b: any) => {
            return (
              new Date(b.node.publishedAt).getTime() -
              new Date(a.node.publishedAt).getTime()
            );
          }
        );
        setEntries(filterEntriesByDate);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const value = {
    entries,
    loading,
  };

  return (
    <EntryContext.Provider value={value}>{children}</EntryContext.Provider>
  );
};
