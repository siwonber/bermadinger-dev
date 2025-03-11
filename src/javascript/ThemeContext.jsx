import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isColorblind, setIsColorblind] = useState(
    localStorage.getItem("colorblindMode") === "true"
  );

  useEffect(() => {
    if (isColorblind) {
      document.documentElement.classList.add("colorblind");
    } else {
      document.documentElement.classList.remove("colorblind");
    }
    localStorage.setItem("colorblindMode", isColorblind);
  }, [isColorblind]);

  const toggleTheme = () => {
    setIsColorblind((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isColorblind, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
