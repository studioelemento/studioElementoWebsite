import { useState } from "react";
import heroVideo from "../../../assets/Videohereo.mp4";

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Work",      href: "#work" },
    { label: "Services",  href: "#services" },
    { label: "Exchange",  href: "#exchange" },
    { label: "Culture",   href: "#culture" },
    { label: "About Us",  href: "#about" },
    { label: "News",      href: "#news" },
    { label: "Careers",   href: "#careers" },
    { label: "Contact",   href: "#contact" },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">

      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:font-semibold"
      >
        Skip to content
      </a>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Navbar — logo left | nav + lang grouped right */}
      <header className="absolute top-0 left-0 z-50 w-full flex items-center justify-between px-6 py-6 md:px-10 md:py-7">

        {/* Logo — left */}
        <a href="/" className="text-4xl md:text-5xl font-black tracking-wider text-white" aria-label="Studio Elemento — Home">
          SE<span className="text-[#d9ef57]">.</span>
        </a>

        {/* Nav + Language — right side */}
        <div className="hidden md:flex items-center gap-10">

          {/* Navigation */}
          <nav aria-label="Main navigation" className="flex items-center gap-8 text-sm font-medium text-white/85">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden z-50 relative w-8 h-8 justify-center items-end"
          aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block h-0.5 transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-8 rotate-45 translate-y-2 bg-black" : "w-8 bg-white"}`} />
          <span className={`block h-0.5 transition-all duration-300 ease-out ${isMobileMenuOpen ? "opacity-0 bg-black" : "w-8 bg-white"}`} />
          <span className={`block h-0.5 transition-all duration-300 ease-out ${isMobileMenuOpen ? "w-8 -rotate-45 -translate-y-2 bg-black" : "w-6 bg-white"}`} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center px-8 transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
          {navLinks.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-4xl font-black text-black transition-all duration-500 delay-${index * 100} hover:text-neutral-500 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Hero Content */}
      <main id="main-content" className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="max-w-5xl">
            <p className="reveal mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[#d9ef57]">
              Brand &amp; Design Agency
            </p>
            <h1 className="reveal delay-200 text-5xl font-black leading-none tracking-tight sm:text-7xl md:text-8xl">
              We design brands that move people.
            </h1>
            <p className="reveal delay-300 mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
              Strategy, identity, and digital experience — crafted for ambitious businesses.
            </p>
          </div>
        </div>
      </main>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 reveal delay-500">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-px bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1/2 w-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}