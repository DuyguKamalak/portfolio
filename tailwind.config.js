/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1A2A1A', // Çok koyu orman yeşili
        'emerald': '#3B5B3B', // Yumuşak orman yeşili
        'golden': '#A68F5B', // Mat altın
        'text-light': '#E8ECE8', // Açık gri-yeşil
        'card-bg': '#2A3A2A', // Koyu gri-yeşil
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};