/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      colors: {
        red: "var(--red)",
      },

      backgroundImage: {
        bgRedImage: "var(--background-red-image)",
        bgGridImage: "var(--background-grid-image)",
        bgGradient: "var(--gradient-dark)",
      },

      fontFamily: {
        sansSerifSecondary: "Poppins",
      },

      borderRadius: {
        customRadius: "var(--radius)",
      },

      animation: {
        customBounce: "customBounce 2s ease infinite",
        headerMove: "headerMove 5s ease-out",
      },

      keyframes: {
        customBounce: {
          "0%": {
            transform: "translate(-50%, -45px)",
            "animation-timing-function": "ease-in",
            opacity: 1,
          },
          "24%": {
            opacity: 1,
          },
          "40%": {
            transform: "translate(-50%, -24px)",
            "  animation-timing-function": "ease-in",
          },
          "65%": {
            transform: "translate(-50%, -12px)",
            " animation-timing-function": "ease-in",
          },

          "25%, 55%, 75%, 87%": {
            transform: "translate(-50%, 0px)",
            " animation-timing-function": "ease-out",
          },
          "100%": {
            transform: " translate(-50%, 0px)",
            " animation-timing-function": "ease-out",
            opacity: 1,
          },
        },

        headerMove: {
          "0%": {
            transform: "scale(1.3) translateY(-15px)",
            "transform-origin": "50% 16%",
          },

          "100%": {
            transform: " scale(1) translateY(0)",
            "  transform-origin": "top",
          },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },

    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
};
