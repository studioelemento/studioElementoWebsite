import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import AgencyIntroSection from "./components/AgencyIntroSection";
import WorkGridSection from "./components/WorkGridSection";
import ContactSection from "./components/ContactSection";
import ExchangeSection from "./components/ExchangeSection";
import LatestNewsSection from "./components/LatestNewsSection";
import FooterSection from "./components/FooterSection";
import useScrollReveal from "../../hooks/useScrollReveal";
import Footer from "../../components/Footer";

import BrandLogosMarquee from "./components/BrandLogosMarquee";

const DotFolio = () => {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <HeroSection />
      <AgencyIntroSection />
      <WorkGridSection />
      {/* <ContactSection /> */}
      {/* <ExchangeSection /> */}
      {/* <LatestNewsSection /> */}
      {/* <FooterSection /> */}
      <BrandLogosMarquee />
      <Footer />
    </>
  );
};

export default DotFolio;
