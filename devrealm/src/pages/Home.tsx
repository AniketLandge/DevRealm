import { usePageTitle } from "../hooks/usePageTitle";

export function Home() {
  usePageTitle("DevRealm | Home");
  return (
    <>
      <section>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a developer showcasing my work and skills.</p>
      </section>
    </>
  );
}
