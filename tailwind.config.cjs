module.exports = {
  content: [
    "./src/pages/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./src/components/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./src/layouts/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./src/sections/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        parallax: "url('/specialbanner.jpg')",
        parallaxTWo: "url('/bannerThree.jpg')",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["DM Serif Display", "serif"],
        title: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};

