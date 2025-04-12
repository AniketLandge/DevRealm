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
    "32px": "32px",
    "64px": "64px",
    "128px": "128px",
    "256px": "256px",
    "512px": "512px",
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
});
