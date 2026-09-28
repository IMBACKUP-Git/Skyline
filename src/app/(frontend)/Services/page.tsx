import type { Metadata } from "next";
import ConverstationCTA from "./ConversationCTA/ConversationCTA";
import Service from "./Service/Service";
import ServicesHero from "./ServicesHero/ServicesHero";
import Testimonial from "./Testimonial/Testimonial";
import Reveal from "../components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From off-plan sales and leasing to property management and legal support — explore the full range of real estate services SKRE offers across Dubai.",
  keywords: [
    "Dubai real estate services",
    "off-plan sales Dubai",
    "property leasing Dubai",
    "property management Dubai",
    "real estate legal services Dubai",
  ],
};

export default function Services() {
  return (
    <div>
      <ServicesHero />
      <Service />
      <Reveal>
        <Testimonial />
      </Reveal>
      <Reveal>
        <ConverstationCTA />
      </Reveal>
    </div>
  );
}
