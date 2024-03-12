

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Corrected path to include all file extensions
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://tse3.mm.bing.net/th/id/OIG3.OUgvxmrPvYiuVEWkrNPh?pid=ImgGn')",
      },
    },
  },
  plugins: [],
};
