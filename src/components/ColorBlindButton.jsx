import { useTheme } from "../javascript/ThemeContext";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Icons für bessere Erkennbarkeit

const ColorBlindToggle = () => {
  const { isColorblind, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      {/* Icon & Label */}
      <div className="flex items-center space-x-1 text-white text-xs">
        {isColorblind ? <FaEye className="text-secondaryColor text-sm" /> : <FaEyeSlash className="text-gray-400 text-sm" />}
        <span>{isColorblind ? "Colorblind Mode: ON" : "Colorblind Mode: OFF"}</span>
      </div>

      {/* Toggle-Switch */}
      <div 
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${
          isColorblind ? "bg-secondaryColor" : "bg-gray-500"
        }`}
        onClick={toggleTheme}
      >
        <motion.div
          className="w-5 h-5 bg-white rounded-full shadow-md"
          animate={{ x: isColorblind ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
    </div>
  );
};

export default ColorBlindToggle;
