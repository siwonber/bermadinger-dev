import { useState, useEffect, useRef } from "react";

const words = [
  "studying MMT WEB.",
  "always learning.",
  "always trying new things.",
  "a Developer.",
  "a Coffee Lover.",
  "a Nerd.",
  "a Gamer.",
  "a Music Enthusiast.",
  "in Love with my GF! (She made me do this)"
];

function ChangingPhrase() {
  const [text, setText] = useState("");
  const wordIndex = useRef(0);
  const isDeleting = useRef(false);
  const charIndex = useRef(0);
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const typing = setInterval(() => {
      const word = words[wordIndex.current];

      // Tippen
      if (!isDeleting.current && charIndex.current < word.length) {
        setText(word.slice(0, charIndex.current + 1));
        charIndex.current += 1;
      }
      // Löschen
      else if (isDeleting.current && charIndex.current > 0) {
        setText(word.slice(0, charIndex.current - 1));
        charIndex.current -= 1;
      }
      // Fertig getippt → Pause & dann löschen starten
      else if (!isDeleting.current && charIndex.current === word.length) {
        setTimeout(() => {
          isDeleting.current = true;
        }, 2000); // Pause bevor Löschen beginnt
      }
      // Komplett gelöscht → nächstes Wort
      else if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        wordIndex.current = (wordIndex.current + 1) % words.length;
        setCurrentWord(words[wordIndex.current]);
      }
    }, isDeleting.current ? 75 : 150);

    return () => clearInterval(typing);
  }, []);

  return (
    <span className="text-primary relative">
      {text}
      <span className="inline-block ml-1 w-[1ch] animate-blink">|</span>
    </span>
  );
}

export default ChangingPhrase;
