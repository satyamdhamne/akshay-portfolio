import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import Parallax from "@/components/ui/parallax";

// Import slate image
import slateImage from "../assets/images/slateimagepn.png";

const HeroSection = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    // Handle scroll for parallax effect
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPos(position);
    };
    
    // Handle window resize for responsive adjustments
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="h-screen relative flex flex-col justify-end overflow-hidden"
    >
      {/* Full black background first for fallback */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* New approach: Use an absolutely positioned div that contains only the visible portion of the image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Add a solid color background to the image container */}
        <div 
          className="absolute inset-0 w-full h-full bg-black"
          style={{ 
            transform: `translateY(${scrollPos * 0.1}px)` 
          }}
        >
          {/* Use CSS background approach for more reliable mobile rendering */}
          <motion.div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${slateImage})`,
              // Adjust background position based on screen size - move image higher for smaller screens
              backgroundPosition: windowWidth < 380 ? 'center 15%' : // Extremely small devices (iPhone SE)
                                windowWidth < 480 ? 'center 20%' : // Extra small devices
                                windowWidth < 768 ? 'center 25%' : // Small devices (iPhone XR, 12 Pro, etc)
                                'center 30%', // Larger screens
              // Adjust background size based on screen size - larger size for smaller screens
              backgroundSize: windowWidth < 380 ? '200% auto' : // Extremely small devices (iPhone SE)
                             windowWidth < 480 ? '180% auto' : // Extra small devices
                             windowWidth < 768 ? '160% auto' : // Small devices
                             windowWidth < 1024 ? '140% auto' : // Medium devices
                             'cover', // Large devices
              backgroundRepeat: 'no-repeat'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Dark gradient overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>
        </div>
      </div>
      
      {/* Minimal content positioned at bottom left with parallax effect */}
      <div className="container mx-auto px-6 z-20 mb-24 md:mb-32">
        <div className="max-w-3xl">
          <motion.div
            className="border-l-4 border-pink-500 pl-4 md:pl-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              transform: `translateY(${-scrollPos * 0.1}px)` 
            }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-clash font-bold tracking-tight mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              AKSHAY NARAYAN
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl font-supreme tracking-wide text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Line Producer
            </motion.p>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <IoIosArrowDown className="text-2xl animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
