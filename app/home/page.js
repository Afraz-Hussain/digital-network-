import QuickInquiry from "./Contactview";
import ContactCTA from "./Cta";
import GrouponFreightExpertise from "./Details";
import ServicesSection from "./Homeservice";
import Homeview from "./Homeview";
import TransportSections from "./section1";
import WhyChooseUs from "./whyus";

export default function Home() {
  return (
    <div>
     
      <Homeview/>
      <TransportSections/>
      <ServicesSection/>
      <WhyChooseUs/>
      {/* <ContactCTA/> */}
      <GrouponFreightExpertise/>
      <QuickInquiry/>
    </div>
  );
}