export default function AgencyIntroSection() {
  return (
    <section id="about" className="relative w-full bg-[#f3f3f1] text-black">
      <div className="mx-auto flex flex-col justify-center max-w-7xl px-8 pt-24 pb-8 md:px-16 lg:px-24 md:pt-32 md:pb-12">
        <div className="max-w-4xl">
          <h2 className="reveal delay-100 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl mb-2 text-[#1a1a1a]">
            We feel design is the first step to create a change.
          </h2>
          <p className="reveal delay-200 text-xl font-medium md:text-2xl lg:text-3xl text-neutral-600 mb-12">
            If you feel the same, hop on!
          </p>
          
          <h3 className="reveal delay-300 text-xl font-bold md:text-2xl lg:text-3xl text-[#1a1a1a]">
            Have a look at some of our works
          </h3>
        </div>
      </div>
    </section>
  );
}
