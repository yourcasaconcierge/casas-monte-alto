'use client';

import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true);
    }, 2000);
  }, [setHasMounted]);

  if (!hasMounted) return <LoadingScreen />;

  return <>{children}</>;
};

export default ClientOnly;
