import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body", {
  margin: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
});

globalStyle("h1, h2, h3", {
  fontFamily: vars.font.heading,
});
