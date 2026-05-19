import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to real backend / email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-white px-6 py-32 md:px-16 lg:px-28" aria-label="Contact us">
      <div className="relative w-full max-w-5xl mx-auto flex flex-col lg:flex-row justify-between gap-20">

        {/* Left */}
        <div className="reveal-left lg:w-1/2">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-6">Get in touch</p>
          <h2 className="text-[52px] leading-[0.95] md:text-[72px] font-bold text-black mb-10">
            Start your<br />adventure.
          </h2>
          <p className="text-gray-600 font-semibold text-lg mb-4">We can't wait to see where it takes us.</p>
          <p className="text-gray-500 text-base leading-7 mb-10">Leave your details and one of our team will reach out.</p>
          <a
            href="mailto:hello@studioelemento.com"
            className="inline-block border-b-2 border-black pb-2 text-black text-lg font-medium hover:text-neutral-500 transition"
          >
            hello@studioelemento.com
          </a>
        </div>

        {/* Right Form */}
        <div className="reveal-right flex-1 flex items-center lg:w-1/2">
          {submitted ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
              <p className="text-gray-500">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="w-full" onSubmit={handleSubmit} noValidate>

              <div className="mb-12">
                <label htmlFor="contact-name" className="block text-black mb-3 text-sm font-semibold uppercase tracking-widest">
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full border-0 border-b border-black bg-transparent outline-none pb-3 text-base focus:border-[#d9ef57] transition"
                />
              </div>

              <div className="mb-12">
                <label htmlFor="contact-email" className="block text-black mb-3 text-sm font-semibold uppercase tracking-widest">
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full border-0 border-b border-black bg-transparent outline-none pb-3 text-base focus:border-[#d9ef57] transition"
                />
              </div>

              <div className="mb-12">
                <label htmlFor="contact-message" className="block text-black mb-3 text-sm font-semibold uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  className="w-full border-0 border-b border-black bg-transparent outline-none resize-none pb-3 text-base focus:border-[#d9ef57] transition"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <label className="flex items-center gap-3 text-gray-600 text-sm cursor-pointer">
                  <input type="checkbox" name="privacy" required className="w-5 h-5 accent-black" />
                  <span>
                    I agree to Studio Elemento's{" "}
                    <a href="/privacy" className="text-black underline hover:no-underline">Privacy Policy</a> *
                  </span>
                </label>

                <button
                  type="submit"
                  className="bg-black text-white px-8 py-5 font-bold tracking-widest uppercase text-sm hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-[#d9ef57]"
                >
                  Send Now
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}