import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const headerStyle = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: vars.spacing.md,
  backgroundColor: vars.colors.primary,
  color: "white",
});

const navStyle = style({
  display: "flex",
  gap: vars.spacing.md,
});

const linkStyle = style({
  color: "white",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
});

export { headerStyle, navStyle, linkStyle };
