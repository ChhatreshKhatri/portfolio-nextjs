import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "light" | "dark";

const useThemeSwitcher = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get the user's stored theme from localStorage or use the system default
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return storedTheme === "dark" || storedTheme === "light" ? storedTheme : (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    const handleThemeChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);

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
