import About from "./Home/About/About";
import Hero from "./Home/Hero/Hero";
import PropertyMarquee from "./Home/PropertyMarquee/PropertyMarquee";
import Service from "./Home/Service/Service";
import LogoMarquee from "./Home/LogoMarquee/LogoMarquee";
import Insights from "./Home/Insights/Insights";
import PropertyCarousel from "./Home/PropertyCarousel/PropertyCarousel";
import styles from "./page.module.css";
import AboutMobileButton from "./Home/About/AboutMobileButton";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <PropertyMarquee />
      <AboutMobileButton />
      <Service />
      <PropertyCarousel />
      <LogoMarquee />
      <Insights />
    </div>
  );
}
