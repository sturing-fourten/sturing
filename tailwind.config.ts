import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gray: {
          100: "#f9f9f9",
          200: "#f3f3f3",
          300: "#E4E4E4",
          400: "#D0D0D0",
          500: "#B5B5B5",
          600: "#909090",
          700: "#676767",
          800: "#4D4D4D",
          900: "#313131",
          1000: "#010101",
        },
        black: "#000",
        white: "#FFF",
        main: {
          100: "#ECF1FF",
          200: "#D9E3FF",
          300: "#A0B8FF",
          400: "#6284E8",
          500: "#4171FF",
          600: "#1544D0",
        },
        error: "#FF0000",
        gradient: {
          blue: "#3A6CFF",
          gray: "#D9E3FF",
          to: "#FFE4E0",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      pretendard: ["var(--font-pretendard)"],
    },

    zIndex: {
      DEFAULT: "1",
      dropdown: "200",
      sticky: "400",
      popover: "600",
      overlay: "800",
      modal: "1000",
      toast: "1200",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
