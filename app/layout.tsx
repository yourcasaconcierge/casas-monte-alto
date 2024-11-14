import type { Metadata } from 'next';
import { LanguageProvider } from '@/context/LanguageContext';
import { Roboto_Mono } from 'next/font/google';
import DataProviderWrapper from './components/DataProviderWrapper';
import Footer from './components/Footer';
import Nav from './components/Nav';

import './globals.css';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Casas Monte Alto',
  description:
    'Short Term Rental Property Management Hospitality Services In Mendoza, Argentina',

  // Open Graph
  openGraph: {
    title: 'Casas Monte Alto',
    description:
      'Short Term Rental Property Management Hospitality Services In Mendoza, Argentina',
    type: 'website',
    images: [
      {
        url: 'https://media.graphassets.com/jLGSlvgdQWGlUBwnJghU',
        width: 1200,
        height: 630,
        alt: 'Casas Monte Alto',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} scrollhost`}>
        <DataProviderWrapper>
          <LanguageProvider>
            <Nav />
            {children}
            <Footer />
          </LanguageProvider>
        </DataProviderWrapper>
      </body>
    </html>
  );
}
