/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "josefin-sans": ["josefin-sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-light-mobile": "url('../assets/images/bg-mobile-light.jpg')",
        "hero-dark-mobile": "url('../assets/images/bg-mobile-dark.jpg')",
        "hero-light-desktop": "url('../assets/images/bg-desktop-light.jpg')",
        "hero-dark-desktop": "url('../assets/images/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
