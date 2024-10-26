/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'bg-color' : '#1E293B',
      'box-color' : '#334155',
      'dark-gray' : '#64748B',
      'light-gray' : '#CBD5E1',
      'red' : '#F85B4E'
    }
  },
  plugins: [],
}