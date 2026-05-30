'use client';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import PartnersSection from '../components/PartnersSection';
import ContactFooterSection from '../components/ContactFooterSection';
import FloatingContact from '../components/FloatingContact';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <NavBar />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PartnersSection />
      <ContactFooterSection />
      <FloatingContact />
    </main>
  );
}