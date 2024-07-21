/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0872BF',
        second: '#FFFFFF',
        gradien: '#0D92AF',
        boxproject: '#0C1010',
        border1: '#0B467C',
        border2: '#37536C',
      }
    },
  },
  plugins: [],
}

