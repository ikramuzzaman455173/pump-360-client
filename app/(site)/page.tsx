import About from "@/components/About/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA/Cta";
import Faq from "@/components/Faq/Faq";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import HeroSection from "@/components/Hero/HeroSection";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro"
  // other metadata
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <Brands /> */}
      <Feature />
      <About />
      <FeaturesTab />
      {/* <FunFact /> */}
      <Integration />
      <CTA />
      <Faq />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
