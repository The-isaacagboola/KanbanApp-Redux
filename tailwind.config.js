/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "#E5E5E5",
        navAcc: "#E5E5E5",
        redOrange: "#DE350B",
        grayAccent: "#9A9A9A",
        teal: "#468189",
        textColor: "#676767",
        successAcc: "#006644",
      },
    },
  },
  plugins: [],
};
