import { getEntries } from '@/utils/getEntries';
import { getLandingImages } from '@/utils/getLanding';
import { getProperties } from '@/utils/getProperties';
import Contact from './components/sections/Contact';
import Header from './components/sections/Header';
import Journal from './components/sections/Journal';
import Properties from './components/sections/Properties';

export default async function Home() {
  const headerImage = await getLandingImages();
  const properties = await getProperties();
  const entries = await getEntries();

  return (
    <main className="layout flex flex-col gap-12 2xl:gap-32 pt-24">
      <Header data={headerImage.headerImage} />
      <Properties data={properties} />
      <Journal data={entries} />
      <Contact />
    </main>
  );
}
