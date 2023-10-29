import Image from "next/image";
import MNavbar from "./components/MNavbar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className=" ">
      <Navbar />
      <MNavbar />

      {/* HERO SECTION */}
     <HeroSection />

     {/* ABOUT SECTION */}
     <AboutSection />

     {/* SERVICES SECTION */}
     <ServiceSection />

     {/* CONTACT SECTION */}
     <ContactSection /> 
    </main>
  );
}
