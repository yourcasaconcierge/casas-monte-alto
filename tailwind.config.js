/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#fff',
        },
        secondary: {
          DEFAULT: '#353535',
        },
        accent: {
          DEFAULT: '#',
        },
      },
      screens: {
        mob: '475px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
        laptopl: '1440px',
        desktopl: '1920px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
