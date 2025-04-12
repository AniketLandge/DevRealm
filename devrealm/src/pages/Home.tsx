import { usePageTitle } from "../hooks/usePageTitle";
import { container, headingText, imageContainer, subText } from "./Home.css";

export function Home() {
  usePageTitle("DevRealm | Home");
  return (
    <>
      <section>
        <div className={container}>
          <div className={headingText}>
            Shaping Ideas into Real Projects that Deliver Results
            <div className={subText}>
              Hi I'm Aniket, A developer based in India with a passion for code.
            </div>
          </div>
          <div className={imageContainer}>
            <img src="/images/image1.png" alt="Image 1" />
          </div>
        </div>
      </section>
    </>
  );
}
