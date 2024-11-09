/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#040d12",
        darkGray: "#183d3d",
        teal: "#5c8374",
        lightGray: "#93b1a6",
        darkGreen: "#347928",
        lightGreen: "#C0EBA6",
        lightYellow: "#FFFBE6",
        lightPink: "#FCCD2A",
        verde: "#517217",
        piel: "#dca680",
      },
      boxShadow: {
        customBlack: "18px 17px 36px 0px rgba(0, 0, 0, 1)",
        customBlackLarge: "-18px -1px 75px -1px rgba(0, 0, 0, 1)",
        customRight: "6px 6px 7px -6px rgba(0, 0, 0, 1)",
        customLeft: "-6px 5px 10px -6px rgba(0, 0, 0, 1)",
      },
    },
    plugins: [],
  },
};
