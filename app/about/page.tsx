import type { Metadata } from 'next';
import About from './components/About';
import { getAbouts } from '@/utils/getAbouts';

export const metadata: Metadata = {
  title: 'About Us',
};

const AboutPage = async () => {
  const result = await getAbouts();

  return (
    <main className="pb-32 layout">
      <About data={result[0].node} />
    </main>
  );
};

export default AboutPage;
