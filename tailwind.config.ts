/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      before: ["responsive", "hover", "focus"],
      after: ["responsive", "hover", "focus"],
      fontSize: {
        xxs: "6px",
      },
      backgroundColor: {
        bdCl: "#0f172a",
        secCl: "#1e293b",
        theadCl: "#6366f1",
        theadSecCl: "#a5b4fc",
      },
      textColor: {
        prmCl: "#e2e8f0",
        secCl: "#a5b4fc",
        terCl: "#6366f1",
      },
      borderColor: {
        bdCl: "#334155",
        bdCl2: "#F7FFF7",
      },
      fontFamily: {
        sans: "Inter",
      },
    },
    screens: {
      xs: "150px",
      mini: "300px",
      med: "450px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  darkMode: "class",
};
