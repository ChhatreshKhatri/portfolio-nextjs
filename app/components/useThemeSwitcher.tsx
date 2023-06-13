import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "light" | "dark";

const useThemeSwitcher = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const prefersDark = "(prefers-color-scheme: dark)";
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (typeof window !== "undefined") {
      const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : (window.matchMedia(prefersDark).matches ? "dark" : "light");
      setTheme(initialTheme);

      const mediaQuery = window.matchMedia(prefersDark);

      const handleChange = (event: MediaQueryListEvent) => {
        setTheme(event.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useThemeSwitcher;
