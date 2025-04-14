import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import useLocalStorage from "use-local-storage";

export function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
        query: "(prefers-color-scheme: dark)"
    },
    undefined
);

  const [isDark, setIsDark] = useLocalStorage("isDark", systemPrefersDark);

  console.log(isDark);

  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
      localStorage.setItem("isDark", true);
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("isDark", false);
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}