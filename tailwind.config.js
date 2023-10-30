/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './components/slides/**/*.{js,ts,jsx,tsx,mdx}',
    './components/styles/**/*.{js,ts,jsx,tsx,mdx,css}',
    './components/modals/**/*.{js,ts,jsx,tsx,mdx,css}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './components/headers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/footer/**/*.{js,ts,jsx,tsx,mdx}',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '3rem',
      },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin.cjs")
  ],
}

