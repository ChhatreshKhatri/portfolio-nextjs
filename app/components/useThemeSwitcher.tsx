"use client"
import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "light" | "dark";

const useThemeSwitcher = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const prefersDark = "(prefers-color-scheme: dark)";
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia && window.matchMedia(prefersDark).matches ? "dark" : "light";
    const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;
    setTheme(initialTheme);

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

      const mediaQuery = window.matchMedia(prefersDark);
      mediaQuery.addEventListener("change", handleThemeChange);
      setTheme(mediaQuery.matches ? "dark" : "light"); 
      return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useThemeSwitcher;
