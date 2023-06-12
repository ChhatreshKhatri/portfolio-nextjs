import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "light" | "dark";

const useThemeSwitcher = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>(() => {
    const userPref = localStorage.getItem("theme");
    if (userPref) {
      return userPref === "dark" ? "dark" : "light";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const check = e.matches ? "dark" : "light";
      setTheme(check);
      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addListener(handleThemeChange);

    return () => {
      mediaQuery.removeListener(handleThemeChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useThemeSwitcher;
