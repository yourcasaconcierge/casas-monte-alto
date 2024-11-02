import { ReactNode } from 'react';
import { DataProvider } from '@/context/DataContext';
import { getEntries } from '@/utils/getEntries';
import { getLandingImages } from '@/utils/getLanding';
import { getProperties } from '@/utils/getProperties';

interface DataProviderWrapperProps {
  children: ReactNode;
}

const DataProviderWrapper = async ({ children }: DataProviderWrapperProps) => {
  const landingImages = await getLandingImages();
  const properties = await getProperties();
  const journalEntries = await getEntries();

  return (
    <DataProvider
      landingImages={landingImages}
      properties={properties}
      journalEntries={journalEntries}
    >
      {children}
    </DataProvider>
  );
};

export default DataProviderWrapper;
