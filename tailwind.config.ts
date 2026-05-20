import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add brand colors here if specified in design notes
        // Example:
        // brand: {
        //   DEFAULT: '#1A73E8',
        //   dark: '#174EA6',
        // },
      },
    },
  },
  plugins: [],
}

export default config