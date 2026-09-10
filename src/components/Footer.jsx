import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center md:items-start mt-auto z-10 relative">
      <div className="text-[28px] md:text-[36px] font-light mb-8 md:mb-0 tracking-tight">
        Let's <Link to="/connect" className="text-primary font-bold hover:opacity-80 transition-opacity">.connect</Link>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mt-1 md:mt-3">
        <span className="text-gray-200 text-[16px] font-light md:pt-1">You can locate us at</span>
        <div className="flex flex-col items-center md:items-start text-[16px] md:text-[18px] font-bold tracking-tight">
          <span>.thiruvananthapuram</span>
          <span>.pune</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
