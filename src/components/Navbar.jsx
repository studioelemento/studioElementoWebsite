import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <>
      <header className={`w-full flex justify-between items-center px-6 md:px-16 py-8 relative z-[100] ${currentPath === '/' ? 'bg-transparent' : 'md:sticky md:top-0 bg-white/95 backdrop-blur-sm'}`}>
        <Link to="/" onClick={() => setIsOpen(false)} className="text-[3.5rem] md:text-[3.5rem] font-black tracking-tighter text-black md:pl-20 leading-none" data-cursor-hover="true">
          se<span className="text-primary">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 lg:gap-12 text-[18px] font-bold tracking-wide text-black">
          <Link to="/thedotfolio" className={`transition-colors ${isActive('/thedotfolio') ? 'text-primary' : 'hover:text-primary'}`} data-cursor-hover="true">.thedotfolio</Link>
          <Link to="/careers" className={`transition-colors ${isActive('/careers') ? 'text-primary' : 'hover:text-primary'}`} data-cursor-hover="true">.careers</Link>
          <Link to="/snaps" className={`transition-colors ${isActive('/snaps') ? 'text-primary' : 'hover:text-primary'}`} data-cursor-hover="true">.snaps</Link>
          <Link to="/connect" className={`transition-colors ${isActive('/connect') ? 'text-primary' : 'hover:text-primary'}`} data-cursor-hover="true">.connect</Link>
        </nav>

        {/* Mobile Menu Icon (2-line animated X) */}
        <button 
          className="md:hidden flex flex-col justify-center items-end gap-[6px] w-8 h-8 relative z-50" 
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-[2.5px] bg-primary block rounded-full transition-all duration-300 origin-center ${isOpen ? 'w-8 rotate-45 translate-y-[4.25px]' : 'w-8'}`}></span>
          <span className={`h-[2.5px] bg-primary block rounded-full transition-all duration-300 origin-center ${isOpen ? 'w-8 -rotate-45 -translate-y-[4.25px]' : 'w-5'}`}></span>
        </button>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <Link to="/thedotfolio" onClick={() => setIsOpen(false)} className={`text-[2.25rem] font-bold tracking-tight transition-colors ${isActive('/thedotfolio') ? 'text-primary' : 'text-black hover:text-primary'}`} data-cursor-hover="true">.thedotfolio</Link>
        <Link to="/careers" onClick={() => setIsOpen(false)} className={`text-[2.25rem] font-bold tracking-tight transition-colors ${isActive('/careers') ? 'text-primary' : 'text-black hover:text-primary'}`} data-cursor-hover="true">.careers</Link>
        <Link to="/snaps" onClick={() => setIsOpen(false)} className={`text-[2.25rem] font-bold tracking-tight transition-colors ${isActive('/snaps') ? 'text-primary' : 'text-black hover:text-primary'}`} data-cursor-hover="true">.snaps</Link>
        <Link to="/connect" onClick={() => setIsOpen(false)} className={`text-[2.25rem] font-bold tracking-tight transition-colors ${isActive('/connect') ? 'text-primary' : 'text-black hover:text-primary'}`} data-cursor-hover="true">.connect</Link>
      </div>
    </>
  );
};

export default Navbar;
