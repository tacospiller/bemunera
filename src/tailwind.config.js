/** @type {import('tailwindcss').Config} */
/* eslint-disable */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
