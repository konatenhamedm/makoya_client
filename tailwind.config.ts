import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/headers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/footer/**/*.{js,ts,jsx,tsx,mdx}',
    './components/slides/**/*.{js,ts,jsx,tsx,mdx}',
    './components/styles/**/*.{js,ts,jsx,tsx,mdx,css}',
    './components/modals/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
