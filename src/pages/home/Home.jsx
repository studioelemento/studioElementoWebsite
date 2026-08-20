import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col selection:bg-primary selection:text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col justify-center -mt-10">
        
        {/* Top Block */}
        <div className="w-full pl-8 pr-4 md:px-8 md:pl-[22%] lg:pl-[25%] mb-12 md:mb-[12vh] flex flex-col items-start text-left mt-8 md:mt-0">
          <h1 className="text-[3.5rem] md:text-[3.5rem] leading-[1.0] md:leading-[1.05] text-black tracking-tight">
            <span className="font-extralight">studio</span>
            <br />
            <span className="font-extrabold">elemento.</span>
          </h1>
          <p className="text-gray-500 text-[1.2rem] md:text-[1.15rem] mt-3 font-light tracking-wide">
            an <span className="text-primary italic font-medium">experimental</span> design agency
          </p>
        </div>

        {/* Bottom Block */}
        <div className="w-full pl-8 pr-4 md:px-8 md:pl-[22%] lg:pl-[25%] flex flex-col items-start text-left">
          
          <h2 className="text-[2.2rem] md:text-[2.85rem] leading-[1.15] md:leading-[1.25] font-extralight text-black tracking-tight mb-1 md:mb-0">
            {/* Desktop View */}
            <span className="hidden md:inline">We don't design to create the usual.</span>
            {/* Mobile View */}
            <span className="md:hidden">We don't design to<br />create the usual.</span>
          </h2>
          
          <h2 className="text-[2.2rem] md:text-[2.85rem] leading-[1.15] md:leading-[1.25] font-extrabold text-black mb-10 tracking-tight">
            {/* Desktop View */}
            <span className="hidden md:inline">
              We experiment design to create the <br />
              <span className="text-primary italic font-extrabold">unusual.</span>
            </span>
            {/* Mobile View */}
            <span className="md:hidden">
              We experiment design <br />
              to create the <span className="text-primary italic font-extrabold">unusual.</span>
            </span>
          </h2>
          
          <div className="w-full flex justify-center md:justify-start">
            <div className="font-bold text-[15px] md:text-[15px] text-black mb-6 tracking-wide text-center md:text-left">
              check out what we have done <span className="hidden md:inline text-primary">#thedotfolio</span>
            </div>
          </div>
        </div>

        {/* Button Absolute Center */}
        <div className="w-full flex justify-center mt-2 pb-16">
          <Link 
            to="/thedotfolio"
            className="inline-block bg-primary text-black font-extrabold text-[18px] md:text-[18px] px-10 md:px-10 py-3 md:py-3 rounded-full hover:bg-primary-hover transition-colors tracking-wide"
            data-cursor-hover="true"
          >
            #thedotfolio
          </Link>
        </div>

        {/* Mobile Footer */}
        <div className="w-full text-center pb-6 md:hidden text-gray-400 text-[13px] font-normal">
          (c) 2026 studio elemento
        </div>
      </main>
    </div>
  );
};

export default Home;
