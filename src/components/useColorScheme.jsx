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
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}