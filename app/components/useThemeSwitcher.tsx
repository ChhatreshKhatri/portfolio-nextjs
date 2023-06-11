import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const prefersDark = "(prefers-color-scheme: dark)";
  const [theme, setTheme] = useState(() => {
    const userPref = window.localStorage.getItem("theme");
    if (userPref) {
      return userPref === "dark" ? "dark" : "light";
    } else {
      return window.matchMedia(prefersDark).matches ? "dark" : "light";
    }
  });
  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersDark);
    const userPref = window.localStorage.getItem("theme");
    const handler = () => {
      if(userPref){
        let check=userPref==="dark"?"dark":"light";
        setTheme(check);
        if(check==="dark"){
          document.documentElement.classList.add("dark");
        }else{
          document.documentElement.classList.remove("dark");
        }
      }else{
        let check=mediaQuery.matches?"dark":"light";
        setTheme(check);
        if(check==="dark"){
          document.documentElement.classList.add("dark");
        }else{
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, setTheme];
};

export default useThemeSwitcher;
