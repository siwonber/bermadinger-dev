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

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Leicht dunkler, damit alte Zeichen verschwinden
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 📌 Dynamische Farbe holen
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color") || "#b11226";

      // **Font setzen**
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        let x = i * columnWidth;
        let y = drops[i] * 20;

        // **Häufigkeit der Zeichen erhöhen!**
        if (!symbolData[`${x},${y}`]) {
          let newText = Math.random() > 0.98 && Math.random() > 0.95
            ? specialMessages[Math.floor(Math.random() * specialMessages.length)]
            : String.fromCharCode(0x30a0 + Math.random() * 96);

          symbolData[`${x},${y}`] = { text: newText, alpha: 1 }; // Neu mit voller Opazität
        }

        let symbol = symbolData[`${x},${y}`];

        // **RGB für dynamische Farbe**
        const r = parseInt(primaryColor.slice(1, 3), 16);
        const g = parseInt(primaryColor.slice(3, 5), 16);
        const b = parseInt(primaryColor.slice(5, 7), 16);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${symbol.alpha})`;
        ctx.fillText(symbol.text, x, y);

        // **Zeichen bleiben länger sichtbar (langsameres Verblassen)**
        if (Math.random() > 0.995) {
          symbol.alpha -= 0.02; // Statt 0.05 → Zeichen bleiben länger sichtbar
          if (symbol.alpha <= 0) {
            delete symbolData[`${x},${y}`]; // Zeichen entfernen
          }
        }

        // **Spaltenbewegung bleibt gleich**
        if (y > canvas.height / dpr && Math.random() > 0.999) {
          drops[i] = 0; // Reset
        }
        drops[i] += 0.4; // Geschwindigkeit bleibt gleich
      }
    }

    const interval = setInterval(drawMatrix, 100);

    // MutationObserver für Farbänderung
    const observer = new MutationObserver(() => {
      drawMatrix();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
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
