import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import StatsRibbon from "@/components/sections/StatsRibbon";
import Services from "@/components/sections/Services";
import CaseStudy from "@/components/sections/CaseStudy";
import CTABanner from "@/components/sections/CTABanner";
import WhyBalencer from "@/components/sections/WhyBalencer";
import Members from "@/components/sections/Members";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <StatsRibbon />
        <Services />
        <CaseStudy />
        <CTABanner />
        <WhyBalencer />
        <Members />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
