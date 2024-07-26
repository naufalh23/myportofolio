const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(), 
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
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

