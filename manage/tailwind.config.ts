import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      BrightRed: "hsl(12, 88%, 59%)",
      DarkBlue: "hsl(228, 39%, 23%)",
      DarkGrayishBlue: "hsl(227, 12%, 61%)",
      VeryDarkBlue: "hsl(233, 12%, 13%)",
      VeryPaleRed: "hsl(13, 100%, 96%)",
      VeryLightGray: "hsl(0, 0%, 98%)",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
