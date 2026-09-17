import React, { useMemo, useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Snaps = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);

  const [snapImages, setSnapImages] = useState([]);

  // Dynamically load and shuffle images on mount
  useEffect(() => {
    const images = import.meta.glob("../../assets/snap/*.{png,jpg,jpeg,webp,avif}", { eager: true });
    
    let imgArray = Object.values(images).map((mod, index) => ({
      id: index,
      src: mod.default || mod,
      alt: `Snap ${index + 1}`
    }));

    // Simple shuffle to randomize the collage
    for (let i = imgArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }

    setSnapImages(imgArray);
  }, []);

  // Handle scroll to move the green indicator
  useEffect(() => {
    if (isDragging) return; // Don't override while user is dragging

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;
      
      if (totalScrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }

      const scrollPosition = -rect.top;
      let progress = (scrollPosition / totalScrollableDistance) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDragging]);

  // Dragging logic for custom scrollbar
  const trackRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      if (!trackRef.current || !containerRef.current) return;
      
      const trackRect = trackRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the track
      // Minus 16px (half the pill height) to center it on the cursor
      let newProgress = ((e.clientY - trackRect.top - 16) / (trackRect.height - 32)) * 100;
      newProgress = Math.max(0, Math.min(100, newProgress));
      
      setScrollProgress(newProgress);

      // Force window scroll
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top; 
      
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;
      
      if (totalScrollableDistance > 0) {
        const scrollToY = containerTop + (totalScrollableDistance * (newProgress / 100));
        window.scrollTo(0, scrollToY);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Prevent text selection while dragging
    document.body.style.userSelect = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="bg-white text-black pt-8 pb-24 md:pt-12 px-6 md:px-8">
        
        {/* Main Content Area (Restricted Width exactly like the reference design) */}
        <div ref={containerRef} className="max-w-[990px] mx-auto relative pr-0 md:pr-16 w-full flex flex-col">
          
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-[50px] md:text-[72px] font-black leading-none text-black tracking-tight mb-2">
              snaps.
            </h1>
            <p className="text-[18px] md:text-[22px] text-gray-800 font-medium mb-6">
              Check out our <span className="italic">galleria!</span>
            </p>
            <div className="text-[16px] md:text-[20px] text-black">
              <p className="font-bold mb-1">
                These are some of the snaps we have from our projects.
              </p>
              <p className="font-normal">
                The images might be a bit mixed up, please excuse!!
              </p>
            </div>
          </div>

          {/* Randomized Masonry Collage Grid */}
          <div className="columns-2 sm:columns-3 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6 pb-20">
            {snapImages.map((snap) => (
              <div 
                key={snap.id} 
                className="break-inside-avoid relative overflow-hidden rounded-[14px] md:rounded-[20px] group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(snap)}
              >
                <img 
                  src={snap.src} 
                  alt={snap.alt} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out bg-gray-100"
                  loading="lazy"
                />
                
                {/* Subtle Pinterest-style overlay for hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                
                {/* Pinterest-like More Options Icon on Hover */}
                <button className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </svg>
                </button>
              </div>
            ))}
            
            {snapImages.length === 0 && (
              <p className="text-gray-500 col-span-full">No images found in the snaps folder!</p>
            )}
          </div>

          {/* Vertical Scroll/Timeline Indicator */}
          <div ref={trackRef} className="w-[2px] bg-gray-200 absolute right-0 top-4 bottom-0 hidden md:block">
            <div 
              className={`absolute right-[-3px] w-[8px] h-8 bg-primary rounded-full transition-all duration-75 ease-out cursor-pointer ${isDragging ? 'scale-110 shadow-lg' : ''}`}
              style={{ top: `calc(${scrollProgress}% - ${scrollProgress === 100 ? '32px' : '0px'})` }}
              onMouseDown={handleMouseDown}
            ></div>
          </div>

        </div>
      </main>
      
      {/* Lightbox / Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-10 cursor-zoom-out opacity-100 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button top right */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gray-300 transition-colors z-[210] p-2 bg-black/40 hover:bg-black/60 rounded-full"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Image Container */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-auto cursor-default transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-h-[85vh] w-auto object-contain rounded-[16px] md:rounded-[24px] shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Snaps;
