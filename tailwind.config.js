/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#fdfbf7",
        foreground: "#2d2d2d",
        card: "#ffffff",
        "card-foreground": "#2d2d2d",
        popover: "#ffffff",
        "popover-foreground": "#09090b",
        primary: {
          DEFAULT: "#ff4d4d",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#2d5da1",
          foreground: "#ffffff",
        },
        muted: "#e5e0d8",
        "muted-foreground": "#2d2d2d",
        accent: {
          DEFAULT: "#ff4d4d",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ff4d4d",
          foreground: "#ffffff",
        },
        border: "#2d2d2d",
        input: "#2d2d2d",
        ring: "#2d5da1",
        "secondary-accent": "#2d5da1",
        "secondary-accent-light": "rgba(45, 93, 161, 0.2)",
        "post-it": "#fff9c4",
        tape: "rgba(200, 200, 200, 0.3)",
        chart: {
          1: "#e76e50",
          2: "#2a9d90",
          3: "#274754",
          4: "#e8c468",
          5: "#f4a462",
        },
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        patrick: ["Patrick Hand", "cursive"],
        sans: ["Patrick Hand", "cursive"],
      },
      fontSize: {
        base: ["18px", { lineHeight: "1.6" }],
      },
      borderRadius: {
        wobbly: "255px 15px 225px 15px / 15px 225px 15px 255px",
        "wobbly-md": "225px 15px 15px 15px / 15px 15px 15px 225px",
      },
      boxShadow: {
        "hand-drawn": "4px 4px 0px 0px #2d2d2d",
        "hand-drawn-hover": "2px 2px 0px 0px #2d2d2d",
        "hand-drawn-active": "none",
        "hand-drawn-light": "3px 3px 0px 0px rgba(45, 45, 45, 0.1)",
      },
      keyframes: {
        jiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        jiggle: "jiggle 0.5s ease-in-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
