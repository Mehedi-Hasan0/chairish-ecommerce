/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        chairishTheme: {
          'primary': '#3b5d50',
          'secondary': '#f9bf29',
          'dark': '#2f2f2f',
          'light': '#dce5e4',
          'lighter': '#eff2f1',
          'body_color': '#6a6a6a',
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }
    ]
  },

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
