import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        islamic: {
          gold: '#D4AF37',
          'gold-light': '#F4E4B7',
          'gold-dark': '#B8941E',
          green: '#006B3F',
          'green-light': '#00A86B',
          'green-dark': '#004D2C',
          white: '#FFFFFF',
          cream: '#FAF9F6',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        english: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
