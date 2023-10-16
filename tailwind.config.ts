import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        Fm: "376px",
      },
      colors: {
        "Fm-Moderate-cyan": "hsl(176, 50%, 47%)",
        "Fm-Dark-cyan": "hsl(176, 72%, 28%)",
        "Fm-Black": "hsl(0, 0%, 0%)",
        "Fm-Dark-gray": "hsl(0, 0%, 48%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
