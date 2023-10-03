/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oc-space-blue": "#191e39",
        "oc-pastel-blue": "#37436d",
        "oc-desert-yellow": "#f4d4b8",
        "oc-cold-white": "#edf3fd",
        "oc-rosy-pink": "#d3979b",
        "oc-hover-pink": "#B75259",
      },
    },
  },
  plugins: [],
};
