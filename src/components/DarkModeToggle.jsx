import React from "react";
import { useColorScheme } from "./useColorScheme";

function DarkModeToggle() {
  const {isDark, setIsDark} = useColorScheme();

  return (
    <button
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle dark mode"    
    >
        {isDark ? "🌙 Dark Mode" : "🔆 Light Mode"}
    </button>
  );
};

export default DarkModeToggle