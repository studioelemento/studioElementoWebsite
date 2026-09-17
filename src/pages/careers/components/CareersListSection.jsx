import React, { useState, useEffect } from 'react';

const jobs = [
  {
    id: 1,
    location: "Remote",
    type: "Internship",
    title: "AUTOMOTIVE DESIGN INTERN",
    description: "Support the development of performance electric motorcycles through innovative and production-ready design concepts."
  },
  {
    id: 2,
    location: "Remote",
    type: "Internship",
    title: "CREATIVE CONTENT WRITER",
    description: "Support the design team in creating the content for digital platforms for clients."
  },
  {
    id: 3,
    location: "Remote",
    type: "Internship",
    title: "NODE.JS DEVELOPER INTERN",
    description: "Getting the website and web products up for the clients and internal projects."
  },
  {
    id: 4,
    location: "Remote",
    type: "Internship",
    title: "APP DEVELOPER INTERN",
    description: "Getting the website and web products up for the clients and internal projects."
  },
  {
    id: 5,
    location: "Pune (On-site)",
    type: "Full-time",
    title: "CMF DESIGNER",
    description: "Getting the website and web products up for the clients and internal projects."
  }
];

const CareersListSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Rotating placeholders
  const placeholders = [
    "automotive design intern...",
    "creative content writer...",
    "node.js developer intern...",
    "app developer intern...",
    "cmf designer..."
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500); // Change placeholder every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white text-black py-16 md:py-24 px-6 md:px-8">
      {/* Outer container for the wide text */}
      <div className="max-w-[1000px] mx-auto flex flex-col">

        {/* Top Intro Text */}
        <div className="mb-16 md:mb-24">
          <p className="text-[22px] md:text-[34px] font-bold leading-[1.3] mb-2 text-black tracking-tight">
            Do you think you have fun creating something extraordinary?<br className="hidden md:block" />
            Or get an adrenaline boost when you try solving the unsolvable?
          </p>
          <p className="text-[18px] md:text-[26px] font-medium leading-[1.4] text-black mb-8 md:mb-10 mt-3 tracking-tight">
            If you feel so and believe you can contribute to our vision,<br className="hidden md:block" />
            send your portfolios to us and lets have a chat!
          </p>
          <a href="mailto:join@studioelemento.in" className="text-[18px] md:text-[26px] text-primary font-normal hover:opacity-80 transition-opacity tracking-tight">
            join@studioelemento.in
          </a>
        </div>

        {/* Inner container for Search, Cards, and Timeline (narrower) */}
        <div className="max-w-[850px] mx-auto relative pr-0 md:pr-16 w-full">

          {/* Search Heading */}
          <div className="mb-8 md:mb-10 pr-0 md:pr-16">
            <h2 className="text-[18px] md:text-[26px] font-bold mb-0 text-black tracking-tight">Specifically searching for something?</h2>
            <p className="text-[16px] md:text-[22px] text-black font-medium tracking-tight">We have these empty slots waiting to be filled.</p>
          </div>

          {/* Search Input */}
          <div className="relative mb-8 md:mb-12 pr-0 md:pr-16">
            <div className="flex items-center w-full border-[2px] md:border-[3px] border-gray-200 rounded-[14px] md:rounded-[20px] py-[16px] md:py-[22px] px-[16px] sm:px-6 pr-12 md:pr-[24px] transition-colors focus-within:border-gray-300">
              <span className="text-[#949494] italic text-[12px] md:text-[15px] font-medium hidden sm:block whitespace-nowrap mr-2 pointer-events-none">
                I am looking for
              </span>
              <input
                type="text"
                placeholder={placeholders[placeholderIndex]}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow text-[14px] md:text-[16px] font-bold outline-none bg-transparent text-black placeholder:text-[#949494] placeholder:font-bold w-full"
              />
            </div>
            <svg
              className="absolute right-[16px] md:right-[85px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] md:w-[26px] md:h-[26px] text-primary pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Job Cards & Timeline Container */}
          <div className="relative pr-0 md:pr-16">
            <div className="flex flex-col gap-4 md:gap-5">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => toggleJob(job.id)}
                  className="border-[2px] md:border-[3px] border-gray-200 rounded-[14px] p-4 md:p-6 hover:border-gray-300 transition-colors cursor-pointer group bg-white"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                    <span className="text-[12px] md:text-[14px] text-gray-800 font-medium tracking-tight">{job.location} | {job.type}</span>
                    <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                      <h3 className="font-bold text-[12px] md:text-[13px] tracking-wide uppercase text-black">{job.title}</h3>
                      <svg className={`w-[20px] h-[20px] md:w-[24px] md:h-[24px] text-primary transition-transform duration-300 ${expandedJobId === job.id ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedJobId === job.id ? 'max-h-40 opacity-100 mt-4 md:mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-[11px] md:text-[12px] font-bold text-black w-full sm:w-[85%] leading-[1.6]">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
              {filteredJobs.length === 0 && (
                <div className="text-center text-gray-500 py-8">No matching positions found.</div>
              )}
            </div>

            {/* Vertical Scroll/Timeline Indicator */}
            <div className="w-[2px] bg-gray-200 absolute right-0 top-0 bottom-0 hidden md:block">
              <div className="absolute top-[10px] right-[-3px] w-[8px] h-8 bg-primary rounded-full"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CareersListSection;
