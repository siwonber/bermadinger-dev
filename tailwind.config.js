/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        bgColor: "var(--bg-color)",
        textColor: "var(--text-color)",
        dark: "#353535",
      },
      /*Animation verbessern performance*/
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
      },

      boxShadow: {
        'primary-glow': '0 0 25px 5px var(--primaryColor)',
      },
    },
  },
  plugins: [],
};
