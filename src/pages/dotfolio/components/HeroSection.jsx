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
            <h1 className="reveal delay-200 text-6xl font-black leading-none tracking-tight sm:text-7xl md:text-[6rem] lg:text-[8rem] lowercase text-white mb-2">
              the dotfolio.
            </h1>
            <h2 className="reveal delay-300 text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-12">
              Our <span className="italic">client portfolio</span>
            </h2>
            <div className="reveal delay-500 mt-12">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                Disclaimer:
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 leading-snug max-w-4xl">
                The works you are going to see here were envisioned, conceptualised and developed for the <span className="italic text-primary">pioneers.</span>
              </p>
            </div>
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