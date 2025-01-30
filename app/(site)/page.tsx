import { Metadata } from "next";
// import Brands from "@/components/Brands";
import About from "@/components/About/About";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
// import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA/Cta";
import Integration from "@/components/Integration";
// import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
// import Blog from "@/components/Blog";
import Faq from "@/components/Faq/Faq";
import HeroSection from "@/components/Hero/HeroSection";
import Testimonial from "@/components/Testimonial";

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
