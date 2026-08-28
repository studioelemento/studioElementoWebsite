import heroVideo from "../../../assets/Videohereo.mp4";

export default function HeroSection() {
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
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Navigation is now handled by the global Navbar component */}
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