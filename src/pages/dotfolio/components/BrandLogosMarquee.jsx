import React from 'react';

const BrandLogosMarquee = () => {
  // Using dummy PNG image URLs as placeholders.
  // You can replace these src URLs with your actual logo paths later (e.g., from your assets folder).
  const logos = [
    { id: 1, src: "https://www.citypng.com/public/uploads/preview/red-trademark-pinterest-brand-text-logo-vector-70175169479243908g3yjm9zn.png" },
    { id: 2, src: "https://www.citypng.com/public/uploads/preview/red-trademark-pinterest-brand-text-logo-vector-70175169479243908g3yjm9zn.png" },
    { id: 3, src: "https://www.citypng.com/public/uploads/preview/red-trademark-pinterest-brand-text-logo-vector-70175169479243908g3yjm9zn.png" },
    { id: 4, src: "https://www.citypng.com/public/uploads/preview/red-trademark-pinterest-brand-text-logo-vector-70175169479243908g3yjm9zn.png" },
    { id: 5, src: "https://www.citypng.com/public/uploads/preview/red-trademark-pinterest-brand-text-logo-vector-70175169479243908g3yjm9zn.png" },
    { id: 6, src: "https://www.citypng.com/public/uploads/preview/red-trademark-pinterest-brand-text-logo-vector-70175169479243908g3yjm9zn.png" },
    { id: 7, src: "https://www.citypng.com/public/uploads/preview/red-trademark-pinterest-brand-text-logo-vector-70175169479243908g3yjm9zn.png" }
  ];

  // We duplicate the array to ensure smooth infinite scrolling
  const scrollContent = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-[#FAF9F6] py-10 md:py-16 overflow-hidden relative border-t border-black/5">
      <div className="w-full overflow-hidden flex items-center relative">
        <div className="marquee-track flex gap-8 md:gap-16 px-6 md:px-12 items-center" style={{ animationDuration: '8s' }}>
          {scrollContent.map((logo, index) => (
            <div 
              key={index} 
              className="shrink-0 transition-opacity hover:opacity-100 opacity-100 flex items-center cursor-default"
            >
              <img 
                src={logo.src} 
                alt={`Brand Logo ${logo.id}`} 
                className="h-16 md:h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogosMarquee;
