// TW Elements is free under AGPL, with a commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",

    // // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: () => ({
        slideRight: {
          "0%": { opacity: 0, marginLeft: "-600px" },
          "100%": { opacity: 1, marginLeft: "0" },
        },
        slideLeft: {
          "0%": { opacity: 0, marginRight: "-600px" },
          "100%": { opacity: 1, marginRight: "0" },
        },
      }),
      animation: {
        slideRight: "slideRight 1s ease-in",
        slideLeft: "slideLeft 1s ease-in",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
