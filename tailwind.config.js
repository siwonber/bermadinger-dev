/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Dark Mode als Standard (per Klasse)
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"], 
      },
      colors: {
        primaryTextColor: "var(--primary-text-color)",
        primaryTextGray: "var(--primary-text-gray)",

        primaryColor: "var(--primary-color)",
        "primary-dark": "var(--primary-dark-color)",
        secondaryColor: "var(--secondary-color)",
        "secondary-dark": "var(--secondary-dark-color)",
        thirdColor: "var(--third-color)",
        bgColor: "var(--bg-color)", // Hintergrundfarbe dynamisch aus CSS-Variablen
        textColor: "var(--text-color)", // Textfarbe dynamisch
        dark: "#353535",
      },
    },
  },
  plugins: [],
}
