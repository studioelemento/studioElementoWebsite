export default function FooterSection() {
  return (
    <section className="relative  bg-black text-white overflow-hidden flex flex-col justify-between">
      {/* Main Content */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-24 px-6 py-28 lg:grid-cols-2 lg:px-16">
        {/* Left */}
        <div>
          <h1 className="text-5xl font-bold leading-none md:text-5xl">
            Get in touch.
          </h1>
        </div>

        {/* Right */}
        <div className="max-w-xl">
          <h2 className="mb-8 text-4xl font-bold md:text-4xl">
            Let’s work together.
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-gray-200 md:text-lg">
            Boost your business with brand and design.
            <br />
            You talk. We listen.
          </p>

          <p className="mb-16 text-lg text-gray-200 md:text-lg">
            Contact one of our offices worldwide.
          </p>

          {/* Locations */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-10 md:grid-cols-3">
            {["SALZBURG", "SHANGHAI", "MURRIETA", "MUNICH"].map((city) => (
              <a
                key={city}
                href="/"
                className="group relative w-fit text-lg font-bold tracking-wide md:text-lg"
              >
                {city}

                <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-white transition-all duration-300 group-hover:w-2/3" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Button
      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-lime-300 px-4 py-8 text-xl font-bold text-black writing-vertical">
        Talk to us
      </button> */}

      {/* Footer */}
      <footer className="flex h-50 relative flex-col items-start justify-between gap-8 border-t border-white/10 px-6 py-8 lg:flex-row lg:items-center lg:px-16">
        <img
        className="absolute top-0 right-0 z-0 object-contain w-full   "
        
          loading="lazy"
          src="https://kiska.com/wp-content/themes/kiska/images/footer-hq.jpg"
          alt="Kiska HQ Austria"
        />{" "}
        <div className="z-1 flex w-full justify-between">
        {/* Socials */}
        <div className="flex items-center gap-6 text-2xl">
          <span>◎</span>
          <span>f</span>
          <span>▶</span>
          <span>v</span>
          <span>in</span>
          <span>p</span>
        </div>
        {/* Links */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-400">
          <a href="/">Terms & Conditions</a>
          <a href="/">Imprint</a>
          <a href="/">Privacy</a>
        </div>
        {/* Copyright */}
        <div className="text-sm text-gray-500">© 2026 KISKA</div>
        </div>
      </footer>
    </section>
  );
}
