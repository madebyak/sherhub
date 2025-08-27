import VideoHero from "@/components/sections/VideoHero";
import LogoAnimated from "@/components/sections/LogoAnimated";
import AboutUs from "@/components/sections/AboutUs";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhySherHub from "@/components/sections/WhySherHub";

export default function Home() {
  return (
    <div className="bg-bg-primary">
      <VideoHero />
      <LogoAnimated />
      <AboutUs />
      <ClientsSection />
      <ServicesSection />
      <WhySherHub />
    </div>
  );
}
