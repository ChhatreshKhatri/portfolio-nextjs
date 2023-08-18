import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "light" | "dark";

const useThemeSwitcher = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const getInitialTheme = (): Theme => {
    const storedTheme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : (prefersDark ? "dark" : "light");
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleThemeChange = (event: MediaQueryListEvent) => {
        setTheme(event.matches ? "dark" : "light");
      };

      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", handleThemeChange);

      return () => mediaQuery.removeEventListener("change", handleThemeChange);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useThemeSwitcher;
