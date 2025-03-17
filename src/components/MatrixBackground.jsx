import { useEffect } from "react";

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

    // 📌 Dynamische Spaltenbreite abhängig vom Bildschirm
    let columnWidth;
    if (window.innerWidth < 600) {
      columnWidth = 30; // Mobile: Schmalere Spalten
    } else if (window.innerWidth < 1200) {
      columnWidth = 50; // Tablet/Desktop: Standardbreite
    } else {
      columnWidth = 70; // Große Bildschirme: Breitere Spalten
    }

    // 📌 Matrix-Parameter
    const fontSize = 16;
    const columns = Math.floor(window.innerWidth / columnWidth); // Dynamische Spaltenanzahl
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

    // Zeichen-Lebensdauer-Tracking
    const symbolData = {}; // Speichert Zeichen-Infos für Fade-Out

    function getPrimaryColor() {
      return getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim() || "#b11226";
    }
    
    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      const primaryColor = getPrimaryColor(); // ✅ Always get the latest color
      
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
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${symbol.alpha})`; // ✅ Uses the updated color
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
    }
    

    const interval = setInterval(drawMatrix, 100);

    // MutationObserver für Farbänderung
    const observer = new MutationObserver(() => {
      drawMatrix();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
      {/* Matrix-Canvas */}
      <canvas
        id="matrixCanvas"
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-transparent"
      ></canvas>

      {/* Wrapper für Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
