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
        navy: {
          DEFAULT: "#082A46",
          50: "#E8F0F6",
          100: "#C5D8E9",
          200: "#9DBEDD",
          300: "#74A3D0",
          400: "#4B88C3",
          500: "#3070AE",
          600: "#235588",
          700: "#183C61",
          800: "#0D2235",
          900: "#082A46",
        },
        turquoise: {
          DEFAULT: "#14BBB7",
          50: "#E6F9F8",
          100: "#B3EFED",
          200: "#80E5E3",
          300: "#4DDAD8",
          400: "#1ACFCD",
          500: "#14BBB7",
          600: "#0F9290",
          700: "#0A6968",
          800: "#054040",
          900: "#001717",
        },
        coral: {
          DEFAULT: "#FF7965",
          50: "#FFF0EE",
          100: "#FFD5CF",
          200: "#FFBAB0",
          300: "#FF9E90",
          400: "#FF8371",
          500: "#FF7965",
          600: "#E55A44",
          700: "#CC3C27",
          800: "#B21E0A",
          900: "#990000",
        },
        "off-white": "#F7FAFA",
        "soft-gray": "#EDF3F4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #082A46 0%, #0D3A5C 100%)",
        "gradient-turquoise":
          "linear-gradient(135deg, #14BBB7 0%, #0F9290 100%)",
        "gradient-warm": "linear-gradient(135deg, #F7FAFA 0%, #EDF3F4 100%)",
      },
      boxShadow: {
        card: "0 2px 20px rgba(8, 42, 70, 0.08)",
        "card-hover": "0 8px 40px rgba(8, 42, 70, 0.16)",
        phone: "0 30px 80px rgba(8, 42, 70, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
