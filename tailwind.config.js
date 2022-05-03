module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/assets/images/hero.jpg')",
      },
      colors: {
        primary: "#e50914",
        secondary: "#0d0d0d",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
