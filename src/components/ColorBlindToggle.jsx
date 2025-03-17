import { useTheme } from "../javascript/ThemeContext.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

const ColorBlindToggle = () => {
  const { isColorblind, toggleColorblindMode } = useTheme();

  return (
    <ToggleSwitch 
      label="Colorblind Mode"
      isActive={isColorblind}
      onToggle={toggleColorblindMode}
      IconOn={FaEye}
      IconOff={FaEyeSlash}
      activeColor="text-secondaryColor"
    />
  );
};

export default ColorBlindToggle;
