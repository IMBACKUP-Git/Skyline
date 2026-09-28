import type { Metadata } from "next";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import FAQ from "./FAQ/FAQ";
import Map from "./Map/Map";
import Reveal from "../components/Reveal/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Skyline Keys Real Estate — book a consultation or reach our Dubai office for buying, selling, or leasing enquiries.",
  keywords: [
    "contact Dubai real estate agency",
    "book consultation Dubai property",
    "SKRE contact",
    "Dubai property enquiry",
  ],
};

export default function Contact() {
  return (
    <div>
      <ContactForm />
      <Reveal>
        <ContactInfo />
      </Reveal>
      <Reveal>
        <Map />
      </Reveal>
      <FAQ />
    </div>
  );
}
