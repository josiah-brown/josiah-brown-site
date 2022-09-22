/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./src/**/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    // colors: {
    //   mainD: "#eeeeee",
    //   bgD: "#222222",
    //   mainL: "#000000",
    //   bgL: "#ffffff",
    // },
  },
  plugins: [],
};
