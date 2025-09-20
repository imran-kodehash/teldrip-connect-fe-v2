export default {
  darkMode: ["class"], // dark mode controlled via class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // scans all source files
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background, 0 0% 100%))",
        foreground: "hsl(var(--foreground, 0 0% 0%))",
        primary: {
          90: "#8979F2",
          100: "#F8F6FF",
          200: "#EBE8FF",
          300: "#BCB1FF",
          400: "#999999",
          500: "#4F4F4F",
          600: "#9BA6FA",
          700: "#6979F8",
          800: "#9B9B9B",
          900: "#604ED5",
          DEFAULT: "var(--primary)",
        },
        success: {
          100: "#DDFCE5",
          200: "#D3FBFA",
          300: "#00A5A2",
          500: "#25B39E",
          800: "#00A5A2",
          DEFAULT: "var(--success)",
        },
        error: { DEFAULT: "var(--error)" },
        warning: { 100: "#CCAB17" },
        muted: {
          DEFAULT: "hsl(var(--muted, 210 16% 93%))",
          foreground: "hsl(var(--muted-foreground, 210 16% 30%))",
        },
        secondary: {
          100: "#D9D9D9",
          200: "#F5F5F5",
          300: "#F2F2F2",
          400: "#D9D9D9",
          500: "#515151",
          600: "#f8f8f8",
          700: "#D2D2D2",
          800: "#15151F",
          DEFAULT: "var(--secondary)",
          foreground: "hsl(var(--secondary-foreground, 210 16% 30%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 0 0% 100%))",
          foreground: "hsl(var(--card-foreground, 210 16% 10%))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover, 0 0% 100%))",
          foreground: "hsl(var(--popover-foreground, 210 16% 10%))",
        },
        border: "hsl(var(--border, 210 16% 90%))",
        input: "hsl(var(--input, 210 16% 95%))",
        ring: "hsl(var(--ring, 210 16% 50%))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background, 0 0% 100%))",
          foreground: "hsl(var(--sidebar-foreground, 0 0% 0%))",
          primary: "hsl(var(--sidebar-primary, 120 60% 50%))",
          "primary-foreground":
            "hsl(var(--sidebar-primary-foreground, 0 0% 100%))",
          accent: "hsl(var(--sidebar-accent, 240 60% 50%))",
          "accent-foreground":
            "hsl(var(--sidebar-accent-foreground, 0 0% 100%))",
          border: "hsl(var(--sidebar-border, 0 0% 90%))",
          ring: "hsl(var(--sidebar-ring, 0 0% 50%))",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "custom-soft": "2px 2px 2px 0 rgba(245, 245, 245, 0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  safelist: [
    // optional: add dynamic class patterns to avoid purging
    {
      pattern:
        /(bg|text|border)-(primary|secondary|success|error|warning)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  // plugins: [require("tailwindcss-animate")],
};
