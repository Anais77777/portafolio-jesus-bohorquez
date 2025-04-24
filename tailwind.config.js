/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        primary: {
          100: "#4facfe",
          200: "#7f78ff",
          300: "#6a82fb",
        },
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(90deg, #4facfe 0%, #7f78ff 50%, #6a82fb 100%)",
      },
    },
  },
  plugins: [],
};
