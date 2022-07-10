/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "rotate-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
