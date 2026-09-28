import { getPayload } from "payload";

import config from "@/payload.config";
import About from "./Home/About/About";
import Hero from "./Home/Hero/Hero";
import PropertyMarquee from "./Home/PropertyMarquee/PropertyMarquee";
import Service from "./Home/Service/Service";
import LogoMarquee from "./Home/LogoMarquee/LogoMarquee";
import Insights from "./Home/Insights/Insights";
import PropertyCarousel from "./Home/PropertyCarousel/PropertyCarousel";
import AboutMobileButton from "./Home/About/AboutMobileButton";
import Reveal from "./components/Reveal/Reveal";

export const dynamic = "force-dynamic";

export default async function Home() {
  const payload = await getPayload({ config });

  const { docs: blogs } = await payload.find({
    collection: "blogs",
    sort: "_order",
    depth: 2,
    limit: 3,
  });

  return (
    <div>
      <Hero />
      <Reveal>
        <About />
      </Reveal>
      <PropertyMarquee />
      <Reveal>
        <AboutMobileButton />
      </Reveal>
      <Service />
      <PropertyCarousel />
      <LogoMarquee />
      <Reveal>
        <Insights blogs={blogs} />
      </Reveal>
    </div>
  );
}
