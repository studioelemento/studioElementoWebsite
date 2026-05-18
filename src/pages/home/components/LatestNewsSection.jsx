const newsData = [
  {
    title:
      "Cardo BEYOND smart motorcycle helmet wins Red Dot Award.",
    description:
      "The Cardo BEYOND has won a Red Dot Award, recognising its smart approach to motorcycle helmet design. This full-face smart helmet integrates Cardo’s communication, sound, and connectivity technology directly into the rider experience.",
    date: "Apr 29, 2026",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title:
      "KISKA places 6th in Horizont’s Top 50 Ranking 2026.",
    description:
      "Excited to reveal that KISKA ranks sixth in the Top 50 Ranking by Horizont this year. Our brand and design agency provides world-class support for clients across the globe.",
    date: "Mar 26, 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title:
      "Our Communication team win at Salzburger Landespreis 2026.",
    description:
      "Our video for CIRQL Zero wins the Marketing, Sales, and Direct Communication award at Salzburger Landespreis 2026. A massive congrats to the team and nominees.",
    date: "Mar 2, 2026",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function LatestNewsSection() {
  return (
    <section className="bg-[#f3f3f1] py-14 lg:py-20 overflow-hidden">
      
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8 relative">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-12">
          Latest News
        </h1>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {newsData.map((news, index) => (
            <article
              key={index}
              className="group"
            >
              {/* Image */}
              <div className="overflow-hidden mb-7">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h2 className="text-[30px] leading-[1.15] font-bold text-black mb-6">
                {news.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-[17px] leading-9 mb-8">
                {news.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">
                  {news.date}
                </span>

                <button className="w-14 h-14 bg-[#d9ef57] flex items-center justify-center hover:bg-lime-300 transition">
                  <span className="text-3xl text-gray-700">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Vertical CTA
        <div className="hidden lg:flex absolute right-[-110px] top-[180px] bg-lime-300 w-[78px] h-[230px] items-center justify-center">
          <span className="writing-mode-vertical rotate-180 text-[24px] font-bold text-black">
            Talk to us
          </span>
        </div> */}
      </div>
    </section>
  );
}