/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#2D2E2F',
        link: '#2398FE',
        btnbg: '#2398FE',
        primarytext: '#FFFFFF',
        disablebtn: '#FFFFFF0A',
        disabltext: '#FFFFFF21',
        errortext: '#D40004',
        stroke: '#A0A0A0B2',
        borderdisable:'#FFFFFF33'
      },
      fontFamily: {
        jakartaBold: ["PlusJakartaSans-Bold"],
        jakartaSemi: ["PlusJakartaSans-SemiBold"],
        jakartaRegular: ["PlusJakartaSans-Regular"],
        jakartaLight: ["PlusJakartaSans-Light"],
      },
    },
  },
  plugins: [],
};
