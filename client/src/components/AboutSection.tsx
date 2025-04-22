import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import akshaypic from "../assets/images/AKY.jpeg";
import Parallax from "@/components/ui/parallax";

const AboutSection = () => {
  const { ref, inView } = useScrollAnimation();
  
  const skills = [
    "Film Production",
    "Commercials",
    "Digital Content",
    "Budget Planning",
    "Logistics",
  ];
  
  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 md:py-32 section-transition ${inView ? "section-visible" : ""}`}
    >
      <div className="container mx-auto px-6">
        {/* Title with gradient background */}
        <div className="mb-16 md:mb-24 text-center">
          <Parallax speed={0.15} direction="up">
            <motion.h2 
              className="inline-block text-4xl md:text-5xl font-clash font-bold tracking-tight relative"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="gradient-text">LINE PRODUCER</span>
              <div className="h-1 w-full primary-gradient mt-2"></div>
            </motion.h2>
          </Parallax>
        </div>
      
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <motion.h2 
              className="text-3xl md:text-4xl font-clash font-bold mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="secondary-gradient-text">ABOUT</span> ME
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-6 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I am Akshay Narayan, a dedicated Line Producer with expertise in managing film, commercial, and digital content productions. From budgeting and logistics to crew coordination and location management, I ensure every project runs smoothly and efficiently.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              With extensive industry experience and a strong network of professionals and vendors, I provide end-to-end production support for a seamless workflow, ensuring your vision becomes reality.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-white/10 text-sm">
                  {skill}
                </span>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#portfolio" 
                className="inline-block px-8 py-4 primary-gradient rounded-full text-white font-clash font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                VIEW PORTFOLIO
              </a>
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 border border-white/30 rounded-full text-white font-clash font-medium hover:bg-white/10 transition-all"
              >
                GET IN TOUCH
              </a>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <Parallax speed={0.2} direction="down">
              <div className="absolute -top-10 -left-10 w-40 h-40 secondary-gradient rounded-full blur-[100px] opacity-50"></div>
              <motion.div 
                className="relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={akshaypic}
                  alt="Akshay Narayan, Line Producer" 
                  className="w-full h-auto hover-scale"
                />
              </motion.div>
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
