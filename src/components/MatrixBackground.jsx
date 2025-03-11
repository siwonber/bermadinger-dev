import { useEffect } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export default function MatrixBackground({ children }) {
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // 📌 Hochauflösende Darstellung beibehalten
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    // 📌 Matrix-Parameter
    const fontSize = 16;
    const columnWidth = 50;
    const columns = Math.floor(window.innerWidth / columnWidth);
    const drops = Array(columns).fill(1);

    // 📌 Special Messages (sehr seltene Anzeige)
    const specialMessages = [
      "Hello World!",
      "it works........ why?",
      "i like turtles",
      "web > game",
      "a²+b²=c²",
      "hippity hoppity your code is my property",
    ];

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color") || "#b11226";
      ctx.fillStyle = primaryColor;
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        let text;

        // wie selten
        if (Math.random() > 0.9995 && Math.random() > 0.99) {
          text = specialMessages[Math.floor(Math.random() * specialMessages.length)];
        } else {
          text = String.fromCharCode(0x30a0 + Math.random() * 96); // Standard Katakana
        }

        ctx.fillText(text, i * columnWidth, drops[i] * 20);

        if (drops[i] * 20 > canvas.height / dpr && Math.random() > 0.999) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      }
    }

    const interval = setInterval(drawMatrix, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Matrix-Canvas*/}
      <canvas
        id="matrixCanvas"
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-transparent"
      ></canvas>

      {/* Wrapper für Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
