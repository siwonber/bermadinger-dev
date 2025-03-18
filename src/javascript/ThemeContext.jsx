import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [isColorblind, setIsColorblind] = useState(() => {
    return localStorage.getItem("colorblindMode") === "true";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newValue = !prevMode;
      localStorage.setItem("darkMode", newValue);
  
      if (newValue) {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
  
      return newValue;
    });
  };

  const toggleColorblindMode = () => {
    setIsColorblind((prevMode) => {
      const newValue = !prevMode;
      localStorage.setItem("colorblindMode", newValue);

      if (newValue) {
        document.documentElement.classList.add("colorblind");
      } else {
        document.documentElement.classList.remove("colorblind");
      }

      return newValue;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isColorblind) {
      document.documentElement.classList.add("colorblind");
    } else {
      document.documentElement.classList.remove("colorblind");
    }
  }, [isColorblind]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        isColorblind,
        toggleColorblindMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
