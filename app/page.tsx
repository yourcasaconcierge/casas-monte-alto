import Contact from './components/sections/Contact';
import Header from './components/sections/Header';
import Journal from './components/sections/Journal';
import Properties from './components/sections/Properties';

export default function Home() {
  return (
    <main className="layout flex flex-col gap-20 lg:gap-32 pt-24">
      <Header />
      <Properties />
      <Journal />
      <Contact />
    </main>
  );
}
