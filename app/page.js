import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home8 from "@/components/homes/home-8";
import Hero1 from "@/components/homes/home-4/heros/Hero1";
import Hero2 from "@/components/homes/home-4/heros/Hero2";
import { corporateOnepage } from "@/data/menu";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title: "Desai Homes",
  description: "Desai Homes",
};
export default function Home4ImageParallaxOnepage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header4 links={corporateOnepage} />
            </nav>
          </div>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
              style={{
                backgroundImage: "url(/assets/images/dd/DesaiBanner.jpg)",
              }}
              id="home"
            >
              <Hero2 />
            </ParallaxContainer>

            <Home8 onePage />
          </main>
          <footer className="footer-2 pb-10">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
