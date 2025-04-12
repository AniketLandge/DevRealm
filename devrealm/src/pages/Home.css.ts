import { globalStyle, style } from "@vanilla-extract/css";
import { sprinkles } from "../styles/sprinkles.css";
import { vars } from "../styles/theme.css";
import { media } from "../styles/mediaquery.css";

const container = style([
  sprinkles({
    display: "flex",
    gap: "md",
    width: "100%",
    height: "384px",
    justifyContent: "space-between",
    // overflowY: "scroll",
  }),
  {
    "@media": {
      [media.mobile]: {
        flexDirection: "column",
        height: "100%",
      },
      [media.tablet]: {
        flexDirection: "row",
      },
      [media.desktop]: {
        flexDirection: "row",
      },
    },
  },
]);

const headingText = style([
  sprinkles({
    fontSize: "4xl",
    fontWeight: "bold",
    color: "white",
    paddingTop: "32px",
    paddingBottom: "32px",
    justifySelf: "center",
    width: "70%",
    height: "100%",
  }),
  {
    "@media": {
      [media.mobile]: {
        textAlign: "center",
        justifyContent: "center",
        width: "100%",
        fontSize: vars.fontSize["lg"],
      },
      [media.tablet]: {
        fontSize: vars.fontSize["3xl"],
      },
      [media.desktop]: {
        fontSize: vars.fontSize["4xl"],
      },
    },
  },
]);

const imageContainer = style([
  sprinkles({
    width: "30%",
    height: "100%",
    overflow: "hidden",
  }),
  {
    "@media": {
      [media.mobile]: {
        textAlign: "center",
        justifyContent: "center",
        width: "100%",
      },
      [media.tablet]: {},
      [media.desktop]: {},
    },
  },
]);

// 🆕 This applies styles to img inside imageContainer
globalStyle(`${imageContainer} img`, {
  width: "100%",
  height: "100%",
  objectFit: "contain", // or "contain"
});

const subText = style([
  sprinkles({
    fontSize: "md",
  }),
  {
    "@media": {
      [media.mobile]: {
        fontSize: vars.fontSize["sm"],
      },
      [media.tablet]: {
        fontSize: vars.fontSize["md"],
      },
      [media.desktop]: {
        fontSize: vars.fontSize["md"],
      },
    },
  },
]);

export { container, headingText, imageContainer, subText };
