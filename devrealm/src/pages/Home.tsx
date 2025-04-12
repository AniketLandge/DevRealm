import { Header } from "../components/Header/Header";
import { style } from "@vanilla-extract/css";
import { vars } from "../styles/theme.css";

// const heroStyle = style({
//   textAlign: "center",
//   padding: vars.spacing.lg,
// });

export function Home() {
  return (
    <>
      <Header />
      <section>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a developer showcasing my work and skills.</p>
      </section>
    </>
  );
}
