/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Telugu: "Noto Sans Telugu",
        Hindi: "Tiro Devanagari Hindi",
        English: "Poppins",
        Header: "Barlow",
      },
    },
  },
  plugins: [],
};
