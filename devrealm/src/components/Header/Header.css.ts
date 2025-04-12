import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { sprinkles } from "../../styles/sprinkles.css";

const pulse = keyframes({
  "0%": { transform: "scale(1)", color: vars.colors.secondary },
  "50%": { transform: "scale(1.15)", color: vars.colors.softRed },
  "100%": { transform: "scale(1)", color: vars.colors.softRed },
});

const headerStyle = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "primary",
    color: "softRed",
  }),
]);

const navStyle = style([
  sprinkles({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "md",
  }),
]);

const linkStyle = style({
  color: "white",
  textDecoration: "none",
  ":hover": {
    animation: `${pulse} 0.4s ease-in-out`,
    borderBottomColor: vars.colors.softRed,
  },
});

const brandName = style([sprinkles({ fontSize: "lg", fontWeight: "bold" })]);

export { headerStyle, navStyle, linkStyle, brandName };
