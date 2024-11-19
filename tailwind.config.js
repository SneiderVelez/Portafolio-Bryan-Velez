/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        Play: ["Play", "sans-serif"],
      },
      colors: {
        darkBlue: "#040d12",
        darkBlueGray: "#1B262C",
        darkBlue: "#0F4C75",
        skyBlue: "#3282B8",
        lightBlue: "#BBE1FA",
        skyLightBlue: "#80C4E9",
        rym: "#02b1c8",
      },
      boxShadow: {
        customBlack: "5px 5px 10px 0px rgba(0, 0, 0, 1)",
        customBlackLarge: "1px -5px 20px 0px rgba(0, 0, 0, 1)",
        customRight: "6px 6px 7px -6px rgba(0, 0, 0, 1)",
        customLeft: "-6px 5px 10px -6px rgba(0, 0, 0, 1)",
        customWhiteLarge: "1px -5px 20px 0px rgba(255,255,255,1)",
        customWhite: "0px 0px 4px 0px rgba(255,255,255,1)",
      },
    },
    plugins: [],
  },
  important: true,
};
