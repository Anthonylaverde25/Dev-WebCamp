/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    colors: { magenta: "#f43f5e", primaryFontColor: "#f8fafc" },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans"],
      },
    },
  },

  plugins: [
    require("postcss-nesting"), // Habilita el plugin de anidamiento CSS
    require("tailwindcss"),
  ],
};
