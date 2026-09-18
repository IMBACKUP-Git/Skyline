import ConverstationCTA from "./ConversationCTA/ConversationCTA";
import Service from "./Service/Service";
import ServicesHero from "./ServicesHero/ServicesHero";
import Testimonial from "./Testimonial/Testimonial";

export default function Services() {
  return (
    <div>
      <ServicesHero />
      <Service />
      <Testimonial />
      <ConverstationCTA />
    </div>
  );
}
