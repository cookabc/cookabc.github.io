export const BRAND = {
  name: "VeryFun Company",
  tagline: "Creating a happier world through games",
  description:
    "VeryFun Company is an independent game studio dedicated to crafting games that bring joy to people.",
  social: {
    github: "https://github.com/veryfuncompany",
    x: "https://x.com/veryfuncompany",
    discord: "https://discord.gg/veryfuncompany",
  },
} as const;

export const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
] as const;
