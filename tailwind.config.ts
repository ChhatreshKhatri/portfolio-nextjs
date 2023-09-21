import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
        darkCk: "#5740FF",
        lightCk: "#FF4057",
        darked: "#0c0c0c",
        contentBg: "#E3E3FF",
        navbarBg: "#D3D3FF",
        darker: "#101010",
        lighter: "#f3f3ff",
      },

      dropShadow: {
        "2xl": "0 0 15px #000000",
        "3xl": "0 0 20px #000000",
      },
    },
  },
  plugins: [],
}
export default config
