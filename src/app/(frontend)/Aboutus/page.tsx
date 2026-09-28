import type { Metadata } from "next";
import AboutHero from "./AboutHero/AboutHero";
import FounderSection from "./FounderSection/FounderSection";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Mission from "./Mission/Mission";
import TrackRecord from "./TrackRecord/TrackRecord";
import Vission from "./Vission/Vission";
import Reveal from "../components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Skyline Keys Real Estate (SKRE) is a Dubai-based advisory team built on relationships that outlast the deal — meet the people and track record behind our brokerage.",
  keywords: [
    "About Skyline Keys Real Estate",
    "Dubai real estate agency",
    "SKRE team",
    "Dubai property advisors",
    "real estate brokerage Dubai",
  ],
};

export default function Aboutus() {
  return (
    <div>
      <AboutHero />
      <Reveal>
        <TrackRecord />
      </Reveal>
      <Mission />
      <Vission />
      <Reveal>
        <KeyFeatures />
      </Reveal>
      <Reveal>
        <FounderSection />
      </Reveal>
    </div>
  );
}
