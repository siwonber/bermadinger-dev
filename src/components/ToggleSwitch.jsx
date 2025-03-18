import { motion } from "framer-motion";

const ToggleSwitch = ({ label, isActive, onToggle, IconOn, IconOff, activeColor, textClass}) => {
  return (
    <div className="flex justify-between items-center w-full max-w-[250px] p-3">
      {/* Icon & Label - Now properly aligned */}
      <div className="flex items-center space-x-2 text-xs text-white w-full">
        <span className={`text-base ${isActive ? activeColor : "text-primaryColor"} flex items-center`}>
          {isActive ? <IconOn /> : <IconOff />}
        </span>
        <span className="whitespace-nowrap">{label}: {isActive ? "ON" : "OFF"}</span>
      </div>

      {/* Toggle-Switch */}
      <div 
        className="w-14 h-7 flex items-center bg-gray-700 rounded-full p-1 cursor-pointer transition"
        onClick={onToggle}
      >
        <motion.div
          className="w-6 h-6 bg-white rounded-full shadow-md"
          animate={{ x: isActive ? 28 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
