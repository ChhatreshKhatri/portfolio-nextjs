import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        navBar: "margin, padding, color, background-color, border-color",
      },
      padding: {
        25: "100px",
      },
      transitionDuration: {
        4000: "4000ms",
      },
      boxShadow: {
        top: "0px -4px 6px rgba(0, 0, 0, 0.1)",
        bottom: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        "4xl": "35px",
        "5xl": "40px",
        "6xl": "50px",
      },
      screens: { xxs: "375px", xs: "480px", md: "768px", lg: "1024px", xl: "1200px", xxl: "1440px" },
      colors: {
        dark: "#191919",
        light: "#f3f3FF",
        blue1: "#4158D0",
        yellow1: "#FFCC70",
        blue2: "#1952C0",
        green2: "#20C68A",
        darked: "#0c0c0c",
        buttonBg: "#dde6ff",
        navbarBg: "#c7e1fc",
        darker: "#101010",
        lighter: "#e9e9ff",
      },

      dropShadow: {
        text: "0.75px 0.75px 0.75px #222222",
        "2xl": "0 0 15px #000000",
        "3xl": "0 0 20px #000000",
      },
    },
  },
  plugins: [],
};
export default config;
