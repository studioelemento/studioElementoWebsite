import React from "react";

/* =========================================
   DATA
========================================= */

const sections = [
  {
    reverse: false,
    featured: {
      title: "Strengthening EGYM’s market play.",
      brand: "EGYM",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    },
    items: [
      {
        title: "Life begins at 40 knots.",
        brand: "Performance Boats",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Trends fade. But legends last.",
        brand: "Corsair",
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "The smarter smart helmet.",
        brand: "Cardo",
        image:
          "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Made for champions.",
        brand: "Yonex",
        image:
          "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    reverse: true,
    featured: {
      title: "Creating identity from the heart.",
      brand: "MFD",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    },
    items: [
      {
        title: "Lights, brand, ACTION!",
        brand: "HEPHA",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "From heritage to horizon.",
        brand: "BSA",
        image:
          "https://images.unsplash.com/photo-1558981403-c5f9891cdbc5?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Taking comfort to extremes.",
        brand: "Deuter",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Made by grown-ups. Loved by kids.",
        brand: "nuna",
        image:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
   {
    reverse: false,
    featured: {
      title: "Strengthening EGYM’s market play.",
      brand: "EGYM",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
    },
    items: [
      {
        title: "Life begins at 40 knots.",
        brand: "Performance Boats",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Trends fade. But legends last.",
        brand: "Corsair",
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "The smarter smart helmet.",
        brand: "Cardo",
        image:
          "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: "Made for champions.",
        brand: "Yonex",
        image:
          "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

];

/* =========================================
   REUSABLE CARD
========================================= */

function Card({ project, featured }) {
  return (
    <div className="group relative h-full overflow-hidden bg-black">
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-10 p-5 md:p-8">
        <h3
          className={`font-semibold leading-tight text-white ${
            featured
              ? "max-w-2xl text-4xl md:text-5xl"
              : "text-2xl md:text-3xl"
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/90">
          {project.brand}
        </p>
      </div>
    </div>
  );
}

/* =========================================
   SECTION LAYOUT
========================================= */

function WorkSection({ section }) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      
      {/* LEFT SIDE */}
      <div
        className={`${
          section.reverse ? "md:order-2" : ""
        } h-[100vh]`}
      >
        <Card project={section.featured} featured />
      </div>

      {/* RIGHT GRID */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          section.reverse ? "md:order-1" : ""
        }`}
      >
        {section.items.map((item, index) => (
          <div key={index} className="h-[50vh]">
            <Card project={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function AlternatingWorkGrid() {
  return (
    <section className="relative bg-black">
      
      {/* Floating CTA */}
      <button className="fixed right-0 top-1/2 z-50 -translate-y-1/2 bg-lime-300 px-5 py-8 text-2xl font-semibold text-black transition hover:bg-lime-200">
        <span className="vertical-text">Talk to us</span>
      </button>

      {/* Sections */}
      {sections.map((section, index) => (
        <WorkSection
          key={index}
          section={section}
        />
      ))}

      {/* Vertical Text */}
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