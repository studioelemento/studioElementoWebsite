const cards = [
  {
    title: "Teaming up for impact in our creative lab.",
    category: "Tools & Processes",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "What is performance marketing?",
    category: "Service Deep Dive",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Skills United! Designing sporting goods for a new era.",
    category: "Think Piece",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The future of gaming and tech.",
    category: "Think Piece",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExchangeSection() {
  return (
    <section className="bg-white py-10 lg:py-14 overflow-hidden">
      
      {/* Heading */}
      <div className="px-6 md:px-12 lg:px-80 mb-10">
        <h1 className="text-5xl md:text-5xl font-bold text-black">
          Get into the Exchange.
        </h1>
      </div>

      {/* Cards */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative h-[520px] overflow-hidden group"
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-5 md:p-7 text-white z-10">
                <h2 className="text-3xl font-bold leading-tight mb-3 max-w-[320px]">
                  {card.title}
                </h2>

                <p className="text-lg font-semibold">
                  {card.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Button */}
        {/* <div className="hidden lg:flex absolute right-0 top-[-35px] bg-lime-300 w-[78px] h-[230px] items-center justify-center z-20">
          <span className="writing-mode-vertical rotate-180 text-[24px] font-bold text-black">
            Talk to us
          </span>
        </div> */}
      </div>
    </section>
  );
}