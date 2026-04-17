/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fdfbf7",
        foreground: "#2d2d2d",
        muted: "#e5e0d8",
        accent: "#ff4d4d",
        border: "#2d2d2d",
        "secondary-accent": "#2d5da1",
        "post-it": "#fff9c4",
      },
      fontFamily: {
        kalam: ["Kalam", "cursive"],
        patrick: ["Patrick Hand", "cursive"],
      },
      boxShadow: {
        "hand-drawn": "4px 4px 0px 0px #2d2d2d",
        "hand-drawn-emphasis": "8px 8px 0px 0px #2d2d2d",
        "hand-drawn-light": "3px 3px 0px 0px rgba(45, 45, 45, 0.1)",
      },
    },
  },
  plugins: [],
};
