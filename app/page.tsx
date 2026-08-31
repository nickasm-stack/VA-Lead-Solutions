import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leads from "@/components/Leads";
import CallCenterSolutions from "@/components/CallCenterSolutions";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Leads />
      <CallCenterSolutions />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
