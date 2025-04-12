import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    primary: "#264653",
    secondary: "#2A9D8F",
    background: "#f8f9fa",
    text: "#333333",
    white: "#ffffff",
    black: "#000000",
    gray: "#808080",
    softRed: "#E76F51",
    translucentBlack: "rgba(71, 71, 71, 0.5)",
  },
  font: {
    body: "Roboto, 'Inter', sans-serif",
    heading: "'Poppins', sans-serif",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "32px",
  },
  size: {
    "2px": "2px",
    "4px": "4px",
    "8px": "8px",
    "16px": "16px",
    "20px": "20px",
    "24px": "24px",
    "32px": "32px",
    "48px": "48px",
    "64px": "64px",
    "128px": "128px",
    "256px": "256px",
    "288px": "288px",
    "384px": "384px",
    "448px": "448px",
    "512px": "512px",
    "10%": "10%",
    "20%": "20%",
    "30%": "30%",
    "40%": "40%",
    "50%": "50%",
    "60%": "60%",
    "70%": "70%",
    "80%": "80%",
    "90%": "90%",
    "100%": "100%",
  },
  alignItems: {
    center: "center",
    start: "flex-start",
    end: "flex-end",
  },
  justifyContent: {
    center: "center",
    start: "flex-start",
    end: "flex-end",
    spaceBetween: "space-between",
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    md: "1.125rem", // 18px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "2rem", // 32px
    "3xl": "3rem", // 48px
    "4xl": "4rem", // 64px
  },
});
