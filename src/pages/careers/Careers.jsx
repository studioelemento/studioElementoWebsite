import React from "react";
import Navbar from "../../components/Navbar";
import heroImage from "../../assets/heroCareer.png";
import CareersListSection from "./components/CareersListSection";
import Footer from "../../components/Footer";

const Careers = () => {
  return (
    <div className="bg-white">
      <div className="h-screen flex flex-col">
        <Navbar />
        
        <main 
          className="flex-1 relative flex flex-col justify-end pb-16 md:pb-32"
          style={{ 
            backgroundImage: `url(${heroImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        >
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 w-full px-6 md:px-16 md:pl-[9rem] lg:pl-[10rem] text-white">
            <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] font-black mb-0 leading-none tracking-tighter lowercase">
              careers.
            </h1>
            <p className="text-2xl md:text-3xl lg:text-[32px] mb-8 mt-2 font-normal">
              Join <span className="italic">our team</span>
            </p>
            
            <p className="text-xl md:text-[22px] lg:text-[26px] font-bold mb-1 tracking-tight">
              Do you think you have fun creating something extraordinary?
            </p>
            
            <p className="text-lg md:text-xl lg:text-[22px] font-medium max-w-4xl leading-snug opacity-90">
              If you feel so and believe you can contribute to our vision,<br className="hidden md:block" />
              send your portfolios to us and lets have a chat!
            </p>
          </div>
        </main>
      </div>

      <CareersListSection />
      <Footer />
    </div>
  );
};

export default Careers;
