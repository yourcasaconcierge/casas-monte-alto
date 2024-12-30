import localFont from 'next/font/local';

export const fellix = localFont({
  src: [
    {
      path: '../font/Fellix/Fellix-Thin.woff2',
      weight: '100',
      style: 'Thin',
    },
    {
      path: '../font/Fellix/Fellix-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: '../font/Fellix/Fellix-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../font/Fellix/Fellix-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/Fellix/Fellix-SemiBold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../font/Fellix/Fellix-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../font/Fellix/Fellix-ExtraBold.woff2',
      weight: '800',
      style: 'extrabold',
    },
    {
      path: '../font/Fellix/Fellix-Black.woff2',
      weight: '900',
      style: 'black',
    },
  ],
  variable: '--font-fellix', // CSS variable for font-family
});
