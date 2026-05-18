export default function ContactSection() {
  return (
    <section className=" w-full bg-white px-6 py-50 md:px-16 lg:px-28 flex items-center overflow-hidden">
      <div className="relative w-2/3 mx-auto flex flex-col lg:flex-row justify-between gap-20">
        
        {/* Left Content */}
        <div className="">
          <h1 className="text-[52px] leading-[0.95] md:text-[72px] font-bold text-black mb-14">
            Start your
            <br />
            adventure.
          </h1>

          <p className="text-gray-600 font-semibold text-lg mb-6">
            We can’t wait to see where it takes us.
          </p>

          <p className="text-gray-500 text-base leading-7 mb-12">
            Leave your details here and one of our team will reach out.
          </p>

          <a
            href="mailto:business.development@kiska.com"
            className="inline-block border-b-2 border-black pb-2 text-black text-lg"
          >
            business.development@kiska.com
          </a>
        </div>

        {/* Right Form */}
        <div className="flex-1 flex items-center">
          <form className="w-full max-w-2xl">
            
            {/* Email */}
            <div className="mb-14">
              <label className="block text-black mb-5 text-base">
                Email *
              </label>

              <input
                type="email"
                className="w-full border-0 border-b border-black bg-transparent outline-none pb-3 text-base"
              />
            </div>

            {/* Message */}
            <div className="mb-14">
              <label className="block text-black mb-5 text-base">
                Message
              </label>

              <textarea
                rows={2}
                className="w-full border-0 border-b border-black bg-transparent outline-none resize-none pb-3 text-base"
              />
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              
              {/* Checkbox */}
              <label className="flex items-center gap-3 text-gray-600 text-sm">
                <input
                  type="checkbox"
                  className="w-6 h-6 accent-black"
                />

                <span>
                  I agree to KISKA’s{" "}
                  <a
                    href="/"
                    className="text-black underline"
                  >
                    Privacy Policy *
                  </a>
                </span>
              </label>

              {/* Button */}
              <button
                type="submit"
                className="bg-black text-white px-5 py-5 font-bold tracking-wide hover:opacity-90 transition"
              >
                SEND NOW
              </button>
            </div>
          </form>
        </div>

        {/* Vertical CTA */}
       
      </div>
    </section>
  );
}