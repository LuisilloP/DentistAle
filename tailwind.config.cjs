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
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        title: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
