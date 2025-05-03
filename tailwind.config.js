// tailwind.config.js
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // if using /app
    ],
    theme: {
      extend: {
        keyframes: {
          marquee: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(-100%)" },
          },
        },
        // animation: {
        //   marquee: "marquee 20s linear infinite",
        // },
      },
    },
    plugins: [],
  }
  