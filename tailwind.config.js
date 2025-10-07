/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        customRed: '#ba4949',
        customBlue: '#397097',
        customGreen: '#38858a'
      },
      textColor: {
        customRed: '#ba4949',
        customBlue: '#397097',
        customGreen: '#38858a'
      }
    },
  },
  plugins: [],
}

