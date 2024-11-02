import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Journal from './components/sections/Journal';
import Properties from './components/sections/Properties';

export default async function Home() {
  return (
    <main className="layout flex flex-col gap-12 2xl:gap-32 pt-24">
      <Hero />
      <Properties />
      <Journal />
      <Contact />
    </main>
  );
}
