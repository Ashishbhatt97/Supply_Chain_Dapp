import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        310: "310px",
        767: "767px",
        450: "450px",
        1100: "1100px",
        1000: "1000px",
        900: "900px",
        550: "550px",
        600: "600px",
        500: "500px",
        800: "800px",
        700: "700px",
        385: "385px",
        300: "300px",
        750: "750px",
        400: "400px",
        350: "350px",
        850: "850px",
        768: "768px",
        640: "640px",
        280: "280px",
        1024: "1024px",
        950: "950px",
        1200: "1200px",
        1300: "1300px",
        1366: "13600px",
        1827: "1824px",
        1920: "1920px",
      },
    },
  },
  plugins: [],
};
export default config;
