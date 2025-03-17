import { useTheme } from "../javascript/ThemeContext.jsx";
import { FaSun, FaMoon } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <ToggleSwitch 
      label="Light Mode"
      isActive={isDarkMode}
      onToggle={toggleDarkMode}
      IconOn={FaSun}
      IconOff={FaMoon}
      activeColor="text-primaryColor"
    />
  );
};

export default ThemeToggle;
