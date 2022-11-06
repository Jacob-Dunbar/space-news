/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      fontFamily: {
        body: ["Inter"],
      },
      scale: {
        102: "1.02",
      },
      animation: {
        bounceLeft: "bounceLeft 1s ease infinite",
      },
      keyframes: {
        bounceLeft: {
          "0%, 100%": {
            transform: "translateX(-25%)",
          },
          "50%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
