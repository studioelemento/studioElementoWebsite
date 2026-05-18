import React from "react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/sailing.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Navbar */}
      <header className="absolute top-0 left-0 z-20 flex w-full items-center justify-between px-10 py-8">
        {/* Logo */}
        <div className="text-5xl font-black tracking-wider">
          KISKA<span className="text-white">.</span>
        </div>

        {/* Navigation */}
        <nav className="hidden gap-10 text-sm font-medium text-white/90 md:flex">
          {[
            "Work",
            "Services",
            "Exchange",
            "Culture",
            "About Us",
            "News",
            "Careers",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Language Switch */}
        <div className="hidden items-center gap-2 text-sm md:flex">
          <span className="border-b border-white pb-1">EN</span>
          <span className="text-white/70">|</span>
          <span className="text-white/70">中文</span>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="max-w-5xl">
            <p className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
              Designing Desire
            </p>

            <h1 className="text-5xl font-semibold leading-none tracking-tight sm:text-7xl md:text-8xl">
              Unleash the power of brand and design.
            </h1>
          </div>
        </div>
      </div>

      {/* Vertical CTA */}
      <button className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-lime-300 px-5 py-8 text-2xl font-semibold text-black transition hover:bg-lime-200">
        <span className="writing-mode-vertical rotate-180">
          Talk to us
        </span>
      </button>

      {/* Custom Utility */}
      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
}