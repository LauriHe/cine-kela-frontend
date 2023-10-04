/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'oc-space-blue': '#191e39',
        'oc-pastel-blue': '#37436d',
        'oc-desert-yellow': '#f4d4b8',
        'oc-cold-white': '#edf3fd',
        'oc-rosy-pink': '#d3979b',
        'oc-hover-pink': '#B75259',
      },
    },
    screens: {
      xs: '400px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      icon: '1.7rem',
    },
  },
  plugins: [],
};
