import React, { useState } from "react";
import { motion } from "framer-motion";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
export default function DarkModeSwitch({ setDarkMode, darkMode }) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div>
      <button
        className={`${
          isOn ? "justify-start" : "justify-end"
        } w-10 border border-neutral-800 dark:border-white flex rounded-full transition-all`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="flex items-center"
          layout
          transition={{
            duration:0.2,
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        >
          {isOn ? (
            <DarkModeIcon fontSize="small" />
          ) : (
            <LightModeIcon fontSize="small" />
          )}
        </motion.div>
      </button>
    </div>
  );
}
