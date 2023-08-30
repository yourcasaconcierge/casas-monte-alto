import type { Metadata } from 'next';
import About from './components/About';

export const metadata: Metadata = {
  title: 'About Us',
};

const AboutPage = () => {
  return (
    <main className="pb-32 layout">
      <About />
    </main>
  );
};

export default AboutPage;
