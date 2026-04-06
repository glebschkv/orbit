import { PageWrapper } from "@/components/PageWrapper";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Proof } from "@/components/landing/Proof";
import { WhoItsFor } from "@/components/landing/WhoItsFor";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <PageWrapper>
      <Navigation />
      <Hero />
      <Stats />
      <HowItWorks />
      <Proof />
      <WhoItsFor />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </PageWrapper>
  );
}
