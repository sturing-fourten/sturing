import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
  plugins: [],
};

export default config;
