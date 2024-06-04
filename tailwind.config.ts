/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#888b92",
          "200": "#82848a",
          "300": "#262626",
          "400": "#191d2a",
          "500": "rgba(22, 22, 22, 0)",
        },
        tomato: "#ff5555",
        red: "#ff0000",
      },
      spacing: {},
      fontFamily: {
        "clash-display": "'Clash Display'",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "dm-sans": "'DM Sans'",
        "nunito-sans": "'Nunito Sans'",
      },
    },
    fontSize: {
      base: "16px",
      "13xl": "32px",
      "8xs-2": "4.2px",
      "9xl": "28px",
      lg: "18px",
      "29xl": "48px",
      xl: "20px",
      "xs-8": "11.8px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
