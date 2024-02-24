/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['font-poppins'],
    },
  },
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important:'#root',
  theme: {
      fontFamily: {
        "poppins": ["Poppins","Helvetica","Arial","sans-serif"],
      },
      extend: {
        colors:{
          primary:"#EEDB00",
        }
      },
  },
  plugins: [],
};

