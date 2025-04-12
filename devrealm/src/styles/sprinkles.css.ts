// sprinkles.css.ts
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";

const responsiveProperties = defineProperties({
  properties: {
    padding: vars.size,
    paddingTop: vars.size,
    paddingBottom: vars.size,
    paddingLeft: vars.size,
    paddingRight: vars.size,
    margin: vars.size,
    marginTop: vars.size,
    marginBottom: vars.size,
    marginLeft: vars.size,
    marginRight: vars.size,
    width: vars.size,
    height: vars.size,
    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "18px",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },

    display: ["block", "inline-block", "flex", "none"],
    alignItems: ["center", "flex-start", "flex-end"],
    justifyContent: ["center", "space-between", "flex-start", "flex-end"],
    gap: vars.spacing,
    borderRadius: vars.size,
    backgroundColor: vars.colors,
    color: vars.colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
