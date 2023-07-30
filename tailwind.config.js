/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a487f2",

          secondary: "#f79d91",

          accent: "#d4dd73",

          neutral: "#1e1523",

          "base-100": "#ffffff",

          info: "#65baf6",

          success: "#76e5b5",

          warning: "#f0b92d",

          error: "#fc2c2f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

