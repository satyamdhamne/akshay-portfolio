import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  toggleMenu?: () => void;
}

const Header = ({ toggleMenu }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center ${
        scrolled ? "bg-background/80 backdrop-blur-md" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div></div>
      
      <button 
        id="menuToggle" 
        className="z-50 relative" 
        aria-label="Toggle Menu"
        onClick={() => {
          if (typeof toggleMenu === 'function') {
            toggleMenu();
          } else {
            // Access the toggleMenu from the parent component
            const toggleMenuEvent = new CustomEvent('toggleMenu');
            document.dispatchEvent(toggleMenuEvent);
          }
        }}
      >
        <div className="w-8 flex flex-col justify-center items-center space-y-1.5">
          <div className="w-8 h-0.5 bg-white transition-all duration-300"></div>
          <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
          <div className="w-8 h-0.5 bg-white transition-all duration-300"></div>
        </div>
      </button>
    </motion.header>
  );
};

export default Header;
