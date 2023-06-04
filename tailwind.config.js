/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    
   
    extend: {
      colors:{
        plate:"#20293A",
        dblue:"#0D0E16",
        lblue:"#4E44AC",
        hlblue:"#9EA8FF",
        light:"#E5E5E5"
      },
      animation:{
       bounce:"bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
      },
      keyframes:{
         bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },

      },
    },
  },
  plugins: [],
};
