/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1c1c",
        primary: "#065CB3",
        "primary-dark": "#054e98",
        lime: "#bde74e",
        grey: "#4a4f59",
        rule: "#c6c7cc",
        sand: "#f0f0eb",
        "sand-2": "#deded3",
        coal: "#262626",
        stroke: "#f4f4f4",
        "stroke-2": "#e5e5e5",
        "muted-foot": "#bdbdc2",
        "card-green": "#baf7c4",
        "card-blue": "#bad9f7",
        "card-violet": "#c2c2ef",
      },
      fontFamily: {
        sans: ["Geist", "-apple-system", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1470px", faq: "1216px" },
    },
  },
  plugins: [],
};
