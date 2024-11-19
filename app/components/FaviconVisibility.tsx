"use client";
import { useEffect } from "react";

const FaviconVisibility = () => {
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');

    const handleVisibilityChange = () => {
      const hidden = document.hidden;
      favicon?.setAttribute("href", `./${hidden ? "icon-hidden.svg" : "favicon.ico"}`);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

export default FaviconVisibility;
