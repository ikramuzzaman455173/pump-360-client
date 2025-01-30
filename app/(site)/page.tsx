
import About from "@/components/About/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA/Cta";
import FaqSection from "@/components/Faq/Faq";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import HeroSection from "@/components/Hero/HeroSection";
import Integration from "@/components/Integration";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Pum360 - Smart Fuel Station Management Software",
  description: "Pum360 is an advanced fuel station management system that streamlines sales, inventory, and financial operations with a user-friendly dashboard.",
  keywords: "fuel station software, gas station management, Pum360, fuel station POS, inventory tracking, fuel sales management, petrol pump software, gas station automation",
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
      <FaqSection />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
