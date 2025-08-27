import type { Metadata } from "next";
import VideoHero from "@/components/sections/VideoHero";
import LogoAnimated from "@/components/sections/LogoAnimated";
import AboutUs from "@/components/sections/AboutUs";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhySherHub from "@/components/sections/WhySherHub";

export const metadata: Metadata = {
  title: "SherHub - Marketing Agency",
  description: "Transform your vision into reality with SherHub. We are a full-service marketing agency offering digital marketing, creative production, and comprehensive business solutions.",
  keywords: ["marketing agency", "digital marketing", "creative agency", "branding", "Kurdistan marketing", "web development", "social media", "video production"],
  openGraph: {
    title: "SherHub - Marketing Agency | Transform Your Vision Into Reality",
    description: "Transform your vision into reality with SherHub. We are a full-service marketing agency offering digital marketing, creative production, and comprehensive business solutions.",
    url: '/',
    images: [
      {
        url: '/banner-01.jpg',
        width: 1200,
        height: 630,
        alt: 'SherHub Marketing Agency - Transform Your Vision Into Reality',
      },
    ],
  },
  twitter: {
    title: "SherHub - Marketing Agency | Transform Your Vision Into Reality",
    description: "Transform your vision into reality with SherHub. Full-service marketing agency with digital solutions and creative excellence.",
    images: ['/banner-01.jpg'],
  },
};

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
