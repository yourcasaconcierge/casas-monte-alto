import Header from './components/sections/Header';
import Properties from './components/sections/Properties';
import Journal from './components/sections/Journal';
import Contact from './components/sections/Contact';

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
