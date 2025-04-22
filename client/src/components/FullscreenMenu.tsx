import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { FaInstagram, FaWhatsapp, FaImdb } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface FullscreenMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const FullscreenMenu = ({ isOpen, toggleMenu }: FullscreenMenuProps) => {
  // Enhanced menu background animation
  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0% at top right)",
      pointerEvents: "none" as "none",
    },
    open: {
      opacity: 1,
      clipPath: "circle(150% at top right)",
      pointerEvents: "auto" as "auto",
    },
  };

  // Enhanced content animations
  const menuContentVariants = {
    closed: {
      opacity: 0,
      y: 60,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    },
  };
  
  // Individual item animations
  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    toggleMenu();
  };

  const menuItems = [
    { href: "#hero", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#portfolio", label: "WORK" },
    { href: "#contact", label: "CONTACT" },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/theakshaynarayan?igsh=cWc0emx0cDZnOG05&utm_source=qr", icon: <FaInstagram size={24} />, label: "Instagram" },
    { href: "https://wa.me/919700410079", icon: <FaWhatsapp size={24} />, label: "WhatsApp" },
    { href: "mailto:akshupakhale@gmail.com", icon: <MdEmail size={24} />, label: "Email" },
    { href: "https://m.imdb.com/name/nm13308970/?ref_=ext_shr_lnk", icon: <FaImdb size={24} />, label: "IMDb" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-40 bg-background"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full w-full flex flex-col justify-center items-center"
          variants={menuContentVariants}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.nav 
            className="text-center mb-16" 
            variants={menuContentVariants} 
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <a
                    href={item.href}
                    className="text-4xl md:text-5xl font-clash font-bold hover:gradient-text transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <span className="inline-block overflow-hidden">
                      <motion.span
                        className="inline-block"
                        variants={{
                          open: { y: 0 },
                          closed: { y: "100%" }
                        }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 * index }}
                      >
                        {item.label}
                      </motion.span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
          
          <motion.div
            className="flex space-x-6"
            variants={itemVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-accent transition-colors"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FullscreenMenu;
