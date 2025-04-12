import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { sprinkles } from "../../styles/sprinkles.css";

const container = style([
  sprinkles({ padding: "4px", marginLeft: "32px", marginRight: "32px" }),
]);

export { container };
