import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Theme = "" | "light" | "dark" ;

const useThemeSwitcher = (): [Theme, Dispatch<SetStateAction<Theme>>] => {
  const [theme, setTheme] = useState<Theme>("");

  useEffect(() => {
      const userPref = window.localStorage.getItem("theme");
      if (userPref) {
        setTheme(userPref === "dark" ? "dark" : "light");
      }
  }, []);

  useEffect(() => {
      window.localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
  }, [theme]);

  useEffect(() => {
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const check = e.matches ? "dark" : "light";
      setTheme(check);
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  return [theme, setTheme];
};

export default useThemeSwitcher;
