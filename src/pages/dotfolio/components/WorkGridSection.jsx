/* =========================================
   DATA
========================================= */

const sections = [
  {
    reverse: false,
    featured: {
      title: "Strengthening EGYM's market play.",
      brand: "EGYM",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    },
    items: [
      {
        title: "Life begins at 40 knots.",
        brand: "Performance Boats",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Trends fade. But legends last.",
        brand: "Corsair",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "The smarter smart helmet.",
        brand: "Cardo",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Made for champions.",
        brand: "Yonex",
        image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    reverse: true,
    featured: {
      title: "Creating identity from the heart.",
      brand: "MFD",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    },
    items: [
      {
        title: "Lights, brand, ACTION!",
        brand: "HEPHA",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "From heritage to horizon.",
        brand: "BSA",
        image: "https://images.unsplash.com/photo-1558981403-c5f9891cdbc5?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Taking comfort to extremes.",
        brand: "Deuter",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Made by grown-ups. Loved by kids.",
        brand: "nuna",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    reverse: false,
    featured: {
      title: "A vision for sustainable mobility.",
      brand: "CIRQL Zero",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=1600&auto=format&fit=crop",
    },
    items: [
      {
        title: "Precision engineered for the road ahead.",
        brand: "Brose",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Where sport meets science.",
        brand: "Uvex",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Redefining the open water experience.",
        brand: "Sealine",
        image: "https://images.unsplash.com/photo-1527004013197-933b0f0d62a0?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Adventure starts here.",
        brand: "KTM",
        image: "https://images.unsplash.com/photo-1558981285-6f0c8eebdc7b?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

/* =========================================
   CARD
========================================= */

function Card({ project, featured }) {
  return (
    <a
      href="#"
      className="group relative h-full overflow-hidden bg-black block"
      aria-label={`View project: ${project.title} — ${project.brand}`}
    >
      <img
        src={project.image}
        alt={`${project.brand} — ${project.title}`}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-10">
        <span className="border border-white/60 px-6 py-3 text-sm font-semibold text-white tracking-widest uppercase">
          View Project
        </span>
      </div>

      <div className="absolute bottom-0 left-0 z-10 p-5 md:p-8">
        <h3
          className={`font-bold leading-tight text-white ${
            featured ? "max-w-2xl text-4xl md:text-5xl" : "text-2xl md:text-3xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#d9ef57]">
          {project.brand}
        </p>
      </div>
    </a>
  );
}

/* =========================================
   SECTION LAYOUT
========================================= */

function WorkSection({ section }) {
  return (
    <div className="flex flex-row md:grid md:grid-cols-2 min-h-[60vh] md:min-h-screen overflow-x-auto snap-x snap-mandatory hide-scrollbar md:overflow-visible">
      {/* Featured Card */}
      <div className={`${section.reverse ? "md:order-2" : ""} flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-auto h-[60vh] md:h-[100vh] snap-center md:snap-align-none reveal-left pr-4 md:pr-0`}>
        <Card project={section.featured} featured />
      </div>
      
      {/* 4 Sub-Cards */}
      <div className={`contents md:grid md:grid-cols-2 ${section.reverse ? "md:order-1" : ""}`}>
        {section.items.map((item, index) => (
          <div key={index} className={`flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-auto h-[60vh] md:h-[50vh] snap-center md:snap-align-none pr-4 md:pr-0 reveal delay-${(index + 1) * 100}`}>
            <Card project={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   MAIN EXPORT
========================================= */

export default function AlternatingWorkGrid() {
  return (
    <section id="work" className="relative bg-black" aria-label="Our work">
      {/* Marquee strip */}
      <div className="overflow-hidden bg-[#d9ef57] py-4 text-black">
        <div className="marquee-track">
          {Array(6).fill("Brand · Design · Strategy · Identity · Experience · Innovation · ").map((t, i) => (
            <span key={i} className="text-sm font-black uppercase tracking-widest px-8 whitespace-nowrap">
              {t}
            </span>
          ))}
        </div>
      </div>

      {sections.map((section, index) => (
        <WorkSection key={index} section={section} />
      ))}
    </section>
  );
}