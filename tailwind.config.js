/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "var(--primary-color)", // Rot
        "primary-dark": "var(--primary-dark-color)", // Rot dunkel
        secondaryColor: "var(--secondary-color)", // Blau
        "secondary-dark": "var(--secondary-dark-color)", // Blau dunkel
        thirdColor: "var(--third-color)", // Grün
        dark: "#353535",    // Dunkelgrau (Menü-Hintergrund)
        black: "#000000",   // Schwarz
        white: "#ffffff",   // Weiß 
      },
    },
  },
  plugins: [],
}

