import { useTheme } from "../javascript/ThemeContext.jsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ToggleSwitch from "./ToggleSwitch";

const ColorBlindToggle = () => {
  const { isColorblind, toggleColorblindMode } = useTheme();

  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="text-primaryTextColor text-sm uppercase tracking-wide">Colorblind Mode</span>
      <ToggleSwitch 
        isActive={isColorblind}
        onToggle={toggleColorblindMode}
        IconOn={FaEye}
        IconOff={FaEyeSlash}
        activeColor="text-secondaryColor"
        textClass="hidden" // Text in ToggleSwitch selbst ausblenden
        switchSize="w-14 h-8 rounded-full border border-primaryColor bg-neutral-800 transition duration-300"
        iconSize={16}
        thumbClass="bg-primaryColor shadow-md"
      />
    </div>
  );
};

export default ColorBlindToggle;
