import type { Metadata } from 'next';
import { EntryProvider } from '@/context/EntryContext';
import { Roboto_Mono } from 'next/font/google';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Scrollbars from './components/Scrollbar';

import './globals.css';
import { PropertiesProvider } from '@/context/PropertiesContext';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Casas Monte Alto',
  description: 'Casas Monte Alto',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} scrollhost`}>
        <Nav />
        <Scrollbars />
        <PropertiesProvider>
          <EntryProvider>{children}</EntryProvider>
        </PropertiesProvider>

        <Footer />
      </body>
    </html>
  );
}
