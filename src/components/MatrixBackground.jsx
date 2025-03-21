import { useEffect, useRef } from "react";

export default function MatrixBackground({ children }) {
  const animationFrameId = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let dpr = window.devicePixelRatio || 1;

    function resizeCanvas() {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    let columnWidth;
    if (window.innerWidth < 600) {
      columnWidth = 30;
    } else if (window.innerWidth < 1200) {
      columnWidth = 50;
    } else {
      columnWidth = 70;
    }

    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / columnWidth);
    const drops = Array(columns).fill(1);

    const specialMessages = [
      "Hello World!",
      "it works........ why?",
      "i like turtles",
      "web > game",
      "a²+b²=c²",
      "hippity hoppity your code is my property",
    ];

    const symbolData = {};

    function hexToRGBA(hex, alpha) {
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function getPrimaryColor() {
      return getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim() || "#b11226";
    }

    function getBgColor() {
      return getComputedStyle(document.documentElement).getPropertyValue("--bg-color").trim() || "#000000";
    }

    // FPS Limiter Setup
    let lastTime = 0;
    const fps = 10; // 🎯 Hier kannst du weiter runtergehen für noch langsamer (z.B. 6 oder 8)
    const frameInterval = 1000 / fps;

    function drawMatrix(currentTime) {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = currentTime - lastTime;

      if (deltaTime > frameInterval) {
        lastTime = currentTime;

        ctx.save();
        const bgColor = getBgColor();
        ctx.fillStyle = hexToRGBA(bgColor, 0.1);
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const primaryColor = getPrimaryColor();
        const r = parseInt(primaryColor.slice(1, 3), 16);
        const g = parseInt(primaryColor.slice(3, 5), 16);
        const b = parseInt(primaryColor.slice(5, 7), 16);

        ctx.font = `bold ${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          let x = i * columnWidth;
          let y = drops[i] * 20;

          if (!symbolData[`${x},${y}`]) {
            let newText = Math.random() > 0.98 && Math.random() > 0.95
              ? specialMessages[Math.floor(Math.random() * specialMessages.length)]
              : String.fromCharCode(0x30a0 + Math.random() * 96);

            symbolData[`${x},${y}`] = { text: newText, alpha: 1 };
          }

          let symbol = symbolData[`${x},${y}`];
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${symbol.alpha})`;
          ctx.fillText(symbol.text, x, y);

          if (Math.random() > 0.995) {
            symbol.alpha -= 0.02;
            if (symbol.alpha <= 0) {
              delete symbolData[`${x},${y}`];
            }
          }

          if (y > canvas.height / dpr && Math.random() > 0.999) {
            drops[i] = 0;
          }
          drops[i] += 0.4;
        }
        ctx.restore();
      }

      animationFrameId.current = requestAnimationFrame(drawMatrix);
    }

    animationFrameId.current = requestAnimationFrame(drawMatrix);

    // Observer für Theme-Wechsel
    const observer = new MutationObserver(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        drops[i] = 1;
      }
      for (let key in symbolData) {
        delete symbolData[key];
      }
      drawMatrix(performance.now());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      <canvas
        ref={canvasRef}
        id="matrixCanvas"
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-transparent"
      ></canvas>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
