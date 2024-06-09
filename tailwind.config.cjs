/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx,xml}"],
  theme: {
    colors: {
      white:'#FFFFFF',
      black:'#000000',
      blue: '#84CAE0'
    },
    extend: {
      fontFamily:{
        arima:"'Arima Madurai', cursive",
        arial:"'Arial', sans-serif",
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
