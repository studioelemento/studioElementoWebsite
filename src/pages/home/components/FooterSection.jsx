const socials = [
  { label: "Instagram", href: "#", icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )},
  { label: "LinkedIn", href: "#", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )},
  { label: "YouTube", href: "#", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  )},
  { label: "Facebook", href: "#", icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  )},
];

const cities = ["SALZBURG", "SHANGHAI", "MURRIETA", "MUNICH"];

export default function FooterSection() {
  return (
    <footer className="bg-black text-white" aria-label="Site footer">

      {/* Top content */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-20 px-6 py-28 lg:grid-cols-2 lg:px-16">
        <div className="reveal-left">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight">Get in touch.</h2>
        </div>

        <div className="reveal-right max-w-xl">
          <h3 className="mb-6 text-3xl font-bold">Let's work together.</h3>
          <p className="mb-4 text-base font-medium leading-relaxed text-gray-200">
            Boost your business with brand and design.<br />You talk. We listen.
          </p>
          <p className="mb-16 text-base font-medium text-gray-200">Contact one of our offices worldwide.</p>

          <div className="flex flex-wrap gap-x-12 gap-y-10">
            {cities.map((city) => (
              <a
                key={city}
                href="#"
                aria-label={`Contact our ${city} office`}
                className="group relative w-fit text-sm font-black tracking-widest uppercase text-white pb-2 border-b-[3px] border-white hover:text-neutral-300 hover:border-neutral-300 transition-colors"
              >
                {city}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar with background image */}
      <div className="relative border-t border-white/10 mt-10">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop" 
          alt="Office background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="relative z-10 px-6 py-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 mt-20 md:mt-32">
          {/* Socials */}
          <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`Studio Elemento on ${s.label}`}
                className="text-gray-400 hover:text-white transition"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Legal links */}
          <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-400">
            <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
            <span className="text-gray-600">|</span>
            <a href="/imprint" className="hover:text-white transition">Imprint</a>
            <span className="text-gray-600">|</span>
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">© {new Date().getFullYear()} Studio Elemento</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
