/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  
  theme: {
    extend: {
      colors:{
        lightText:"#ccc",
        quantity_box:"F0F2F2",
        footerBottom:"#131A22",
      },
      boxShadow:{
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1",
        amazonInput: "0 0 3px 2px rgb(228 121 17/50%)",
      },
      },
    },
  plugins: [],
};

