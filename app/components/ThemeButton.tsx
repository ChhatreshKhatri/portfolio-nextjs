import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./icons";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      title={resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
      aria-label="Toggle Theme"
      type="button"
      className={`${
        resolvedTheme === "dark" ? " text-light" : " text-dark"
      } flex align-center justify-center focus:outline-none transition duration-300 ease-in-out hover:scale-110 w-8`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      {resolvedTheme === "dark" ? <SunIcon className={`w-8`} /> : <MoonIcon className={`w-8`} />}
    </button>
  );
};

export default ThemeButton;
