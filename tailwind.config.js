/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b11226", // Rot (Hauptfarbe)
        "primary-dark": "#8f0e1f", // Dunkles Rot
        dark: "#353535",    // Dunkelgrau (Menü-Hintergrund)
        black: "#000000",   // Schwarz
        white: "#ffffff",   // Weiß 
      },
    },
  },
  plugins: [],
}

