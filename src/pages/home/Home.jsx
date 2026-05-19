import React from "react";
import HeroSection from "./components/HeroSection";
import AgencyIntroSection from "./components/AgencyIntroSection";
import WorkGridSection from "./components/WorkGridSection";
import ContactSection from "./components/ContactSection";
import ExchangeSection from "./components/ExchangeSection";
import LatestNewsSection from "./components/LatestNewsSection";
import FooterSection from "./components/FooterSection";
import useScrollReveal from "../../hooks/useScrollReveal";

const Home = () => {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <AgencyIntroSection />
      <WorkGridSection />
      <ContactSection />
      <ExchangeSection />
      <LatestNewsSection />
      <FooterSection />
    </>
  );
};

export default Home;
