import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "light" | "dark";

const useThemeSwitcher = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const prefersDark = "(prefers-color-scheme: dark)";

    const initializeTheme = () => {
      const storedTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia && window.matchMedia(prefersDark).matches ? "dark" : "light";
      const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : systemTheme;
      setTheme(initialTheme);
      setIsReady(true);
    };

    const handleThemeChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    if (typeof window !== "undefined") {
      initializeTheme();
      const mediaQuery = window.matchMedia(prefersDark);
      mediaQuery.addEventListener("change", handleThemeChange);
      return () => mediaQuery.removeEventListener("change", handleThemeChange);
    }
  }, []);

  useEffect(() => {
    if (isReady) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isReady]);

  return [theme, setTheme];
};

export default useThemeSwitcher;
