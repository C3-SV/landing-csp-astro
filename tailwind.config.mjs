/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        csp: {
          paper: "#F5F5F5",
          purple: "#3A2E89",
          teal: "#0BAA9F",
          lightBlue: "#EFF4FE",
          royalBlue: "#455CE9",

          background: "#F5F5F5",
          primary: "#3A2E89",
          accent: "#0BAA9F",
          soft: "#EFF4FE",
          blue: "#455CE9",
          neutral: "#A39481",
          black: "#010101",
          white: "#FFFFFF",
          error: "#BA1A1A",
          warning: "#F59E0B",
          
          // Colores oficiales del manual de marca de CSP
          night: "#0F203E",
          ocean: "#205298",
          indigo: "#4F5BA9",
          violet: "#6D529E",
          teal: "#33BEAC",
          sky: "#2C519B",
          mint: "#46B8A8",
          lavender: "#A6B2DE",
          
        },
      },
      boxShadow: {
        csp: "0px 4px 20px rgba(58, 46, 137, 0.08)",
        "csp-lg": "0px 12px 40px rgba(58, 46, 137, 0.14)",
      },
    },
  },
};

export default config;