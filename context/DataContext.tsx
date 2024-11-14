'use client';

import {
  createContext,
  useContext,
  ReactNode,
  FC,
  useState,
  useEffect,
} from 'react';
import { Properties } from '@/types/PropertyTypes';
import { LandingImages } from '@/types/LandingImages';
import { Entries } from '@/types/EntryTypes';
import LoadingScreen from '@/app/components/LoadingScreen';

interface DataContextProps {
  properties: Properties[] | null;
  landingImages: LandingImages | null;
  journalEntries: Entries[] | null;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps extends DataContextProps {
  children: ReactNode;
}

export const DataProvider: FC<DataProviderProps> = ({
  children,
  properties,
  landingImages,
  journalEntries,
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true);
    }, 2000);
  }, [setHasMounted]);

  if (!hasMounted) return <LoadingScreen />;

  return (
    <DataContext.Provider value={{ properties, landingImages, journalEntries }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
