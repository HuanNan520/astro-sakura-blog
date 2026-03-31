/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#2b6579',
        'primary-light': '#a0d8ef',
        'secondary': '#75565b',
        'secondary-light': '#ffd6db',
        'surface': '#faf9f7',
        'surface-dark': '#12111a',
        'card': '#ffffff',
        'card-dark': '#1c1a2a',
        'muted': '#40484c',
        'border': '#c0c8cc',
        'arena-gold': { DEFAULT: '#d4a017', light: '#ffd700' },
        'arena-purple': { DEFAULT: '#6b4fa3', light: '#a78bfa' },
        'arena-red': { DEFAULT: '#c1392b', light: '#ef4444' },
      },
      fontFamily: {
        headline: ['"Noto Serif SC"', '"Noto Serif"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
