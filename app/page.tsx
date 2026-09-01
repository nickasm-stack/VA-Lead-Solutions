import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leads from "@/components/Leads";
import Industries from "@/components/Industries";
import CallCenterSolutions from "@/components/CallCenterSolutions";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Leads />
        <Industries />
        <CallCenterSolutions />
        <Process />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
