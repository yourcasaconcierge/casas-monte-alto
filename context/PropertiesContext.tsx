'use client';

import { createContext, useEffect, useState } from 'react';
import { Property } from '@/types/PropertyTypes';
import axios from 'axios';

interface PropertiesContextProps {
  properties: Property[];
  loading: boolean;
}

export const PropertiesContext = createContext<PropertiesContextProps>({
  properties: [],
  loading: true,
});

export const PropertiesProvider = ({ children }: any) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/properties');
        console.log('data', response.data);
        const filterPropertiesByDate = response.data.properties.sort(
          (a: any, b: any) => {
            return (
              new Date(b.node.publishedAt).getTime() -
              new Date(a.node.publishedAt).getTime()
            );
          }
        );
        setProperties(filterPropertiesByDate);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const value = {
    properties,
    loading,
  };
  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
};
