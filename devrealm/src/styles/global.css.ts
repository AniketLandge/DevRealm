import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("body", {
  margin: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.colors.black,
  color: vars.colors.text,
  backgroundImage: "url(/images/bg.png)",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
});

globalStyle("h1, h2, h3", {
  fontFamily: vars.font.heading,
});
