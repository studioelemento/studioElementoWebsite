import React from "react";

export default function AgencyIntroSection() {
  return (
    <section className="relative w-full bg-[#f3f3f1] text-black">
      {/* Floating CTA */}
      <button className="fixed right-0 top-1/2 z-50 -translate-y-1/2 bg-lime-300 px-5 py-8 text-2xl font-semibold text-black transition hover:bg-lime-200">
        <span className="vertical-text">Talk to us</span>
      </button>

      {/* Content */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-8 py-24 md:px-16 lg:px-24">
        {/* Top Content */}
        <div className="max-w-6xl">
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Hello! We’re KISKA – a brand and design agency. There’s no single
            way to describe what we do, because it depends on what your brand
            needs.
          </h1>

          <p className="mt-16 max-w-4xl text-xl font-medium leading-relaxed text-neutral-500">
            Since 1990, we’ve helped businesses pivot, grow, simplify, stand
            out, and start over. Sometimes all at once.
          </p>
        </div>

        {/* Bottom CTA Text */}
        <div className="mt-40">
          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Check out our work.
          </h2>
        </div>
      </div>

      {/* Vertical Text Utility */}
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
