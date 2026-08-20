const newsData = [
  {
    title: "Cardo BEYOND smart motorcycle helmet wins Red Dot Award.",
    description: "The Cardo BEYOND has won a Red Dot Award, recognising its smart approach to motorcycle helmet design integrating communication, sound, and connectivity directly into the rider experience.",
    date: "Apr 29, 2026",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Studio Elemento places 6th in Horizont's Top 50 Ranking 2026.",
    description: "Studio Elemento ranks sixth in the Top 50 Ranking by Horizont this year. Our brand and design agency provides world-class support for clients across the globe.",
    date: "Mar 26, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Our team wins at the Regional Creative Awards 2026.",
    description: "Our video for CIRQL Zero wins the Marketing, Sales, and Direct Communication award at the Regional Creative Awards 2026. A massive congrats to the team and all nominees.",
    date: "Mar 2, 2026",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function LatestNewsSection() {
  return (
    <section id="news" className="bg-[#f3f3f1] py-14 lg:py-20 overflow-hidden" aria-label="Latest news">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-8">

        <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-4">From the studio</p>
        <h2 className="reveal delay-100 text-5xl md:text-7xl font-bold text-black mb-14">Latest News</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsData.map((news, index) => (
            <article key={index} className={`group reveal delay-${index * 100}`}>
              <a href="#" aria-label={`Read: ${news.title}`} className="block overflow-hidden mb-6">
                <img
                  src={news.image}
                  alt={news.title}
                  loading="lazy"
                  width={600}
                  height={400}
                  className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
              <time dateTime={news.date} className="text-xs uppercase tracking-widest text-neutral-400 font-semibold">{news.date}</time>
              <h3 className="text-[26px] leading-[1.2] font-bold text-black mt-3 mb-4">{news.title}</h3>
              <p className="text-gray-500 text-base leading-7 mb-6">{news.description}</p>
              <a href="#" aria-label={`Read full article: ${news.title}`} className="inline-flex items-center gap-3 group/link">
                <span className="text-sm font-semibold text-black group-hover/link:underline">Read article</span>
                <span className="w-10 h-10 bg-[#d9ef57] flex items-center justify-center text-xl transition group-hover/link:bg-lime-300">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}