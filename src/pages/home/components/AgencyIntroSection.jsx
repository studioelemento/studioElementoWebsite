export default function AgencyIntroSection() {
  return (
    <section id="about" className="relative w-full bg-[#f3f3f1] text-black">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-8 py-24 md:px-16 lg:px-24">

        {/* Top Content */}
        <div className="max-w-6xl">
          <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-6">
            About the Studio
          </p>
          <h2 className="reveal delay-100 max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Hello! We're Studio Elemento — a brand and design agency. There's no single
            way to describe what we do, because it depends on what your brand needs.
          </h2>

          <p className="reveal delay-200 mt-16 max-w-3xl text-xl font-medium leading-relaxed text-neutral-500">
            We've helped businesses pivot, grow, simplify, stand out, and start over.
            Sometimes all at once.
          </p>
        </div>

        {/* Stats row */}
        <div className="reveal delay-300 mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-black/10 pt-16">
          {[
            { value: "10+", label: "Years of craft" },
            { value: "80+", label: "Brands shaped" },
            { value: "4",   label: "Global studios" },
            { value: "∞",   label: "Ideas explored" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-5xl font-black tracking-tight">{stat.value}</div>
              <div className="mt-2 text-sm text-neutral-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="reveal mt-24">
          <h3 className="text-5xl font-bold tracking-tight md:text-7xl">
            Check out our work.
          </h3>
        </div>
      </div>
    </section>
  );
}
