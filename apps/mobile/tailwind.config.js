/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require("nativewind/preset"),
    require('@/theme').config
  ],
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@/theme').plugin
  ],
};
