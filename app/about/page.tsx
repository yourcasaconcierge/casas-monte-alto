import type { Metadata } from 'next';
import { getAbouts } from '@/utils/getAbouts';
import About from './components/About';

export const metadata: Metadata = {
  title: 'About Us',
};

const AboutPage = async () => {
  const result = await getAbouts();

  return (
    <main className="pb-32 layout overflow-hidden">
      <About data={result[0].node} />
    </main>
  );
};

export default AboutPage;
