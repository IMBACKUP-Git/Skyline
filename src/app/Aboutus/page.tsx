import AboutHero from "./AboutHero/AboutHero";
import FounderSection from "./FounderSection/FounderSection";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Mission from "./Mission/Mission";
import TrackRecord from "./TrackRecord/TrackRecord";
import Vission from "./Vission/Vission";

export default function Aboutus() {
  return (
    <div>
      <AboutHero />
      <TrackRecord />
      <Mission />
      <Vission />
      <KeyFeatures />
      <FounderSection />
    </div>
  );
}
