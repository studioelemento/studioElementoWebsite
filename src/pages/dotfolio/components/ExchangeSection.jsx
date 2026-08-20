const cards = [
  {
    title: "Teaming up for impact in our creative lab.",
    category: "Tools & Processes",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "What is performance marketing?",
    category: "Service Deep Dive",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Skills United! Designing sporting goods for a new era.",
    category: "Think Piece",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The future of gaming and tech.",
    category: "Think Piece",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExchangeSection() {
  return (
    <section id="exchange" className="bg-white py-10 lg:py-14 overflow-hidden" aria-label="The Exchange">

      {/* Heading */}
      <div className="px-6 md:px-12 lg:px-24 mb-10">
        <p className="reveal text-xs font-bold uppercase tracking-[0.25em] text-neutral-400 mb-4">
          Knowledge Hub
        </p>
        <h2 className="reveal delay-100 text-5xl md:text-6xl font-bold text-black">
          Get into the Exchange.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <a
            key={index}
            href="#"
            aria-label={`Read: ${card.title}`}
            className={`relative h-[520px] overflow-hidden group block reveal delay-${index * 100}`}
          >
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition duration-300" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 p-5 md:p-7 text-white z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#d9ef57] mb-3">
                {card.category}
              </p>
              <h3 className="text-2xl font-bold leading-tight max-w-[300px]">
                {card.title}
              </h3>
              <span className="mt-4 inline-block text-sm font-semibold text-white/70 group-hover:text-white transition">
                Read more →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}