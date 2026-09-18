import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import FAQ from "./FAQ/FAQ";
import Map from "./Map/Map";

export default function Contact() {
  return (
    <div>
      <ContactForm />
      <ContactInfo />
      <Map />
      <FAQ />
    </div>
  );
}
