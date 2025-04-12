// import { createTheme, fontFace, globalFontFace } from "@vanilla-extract/css";

// export const [themeClass, vars] = createTheme({
//   colors: {
//     primary: "#264653",
//     secondary: "#2A9D8F",
//     background: "#f8f9fa",
//     text: "#333333",
//   },
//   font: {
//     body: "Roboto, 'Inter', sans-serif",
//     heading: "'Poppins', sans-serif",
//   },
//   spacing: {
//     sm: "8px",
//     md: "16px",
//     lg: "32px",
//   },
// });

// theme.css.ts
import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    primary: "#264653",
    secondary: "#2A9D8F",
    background: "#f8f9fa",
    text: "#333333",
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
});
