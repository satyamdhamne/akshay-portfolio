import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const { ref, inView } = useScrollAnimation();
  
  const services = [
    {
      icon: "ri-money-dollar-circle-line",
      title: "Budgeting & Cost Control",
      description: "Optimizing production costs without compromising quality, ensuring your project stays within financial constraints while meeting creative goals.",
    },
    {
      icon: "ri-map-pin-line",
      title: "Location Scouting & Permits",
      description: "Securing ideal locations with necessary approvals, handling all logistics and paperwork to ensure legal and seamless shooting.",
    },
    {
      icon: "ri-team-line",
      title: "Crew & Equipment Coordination",
      description: "Connecting you with top industry professionals and high-quality gear, managing personnel and technical resources efficiently.",
    },
    {
      icon: "ri-calendar-check-line",
      title: "Scheduling & Logistics",
      description: "Keeping your production on track from start to finish with detailed planning and proactive problem-solving.",
    },
  ];
  
  return (
    <section
      id="services"
      ref={ref}
      className={`py-24 md:py-32 section-transition ${inView ? "section-visible" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-clash font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="secondary-gradient-text">MY</span> SERVICES
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's make your vision a reality with these end-to-end production services
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover-scale"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <i className={`${service.icon} text-4xl text-accent mb-4`}></i>
              <h3 className="text-2xl font-clash font-bold mb-3">{service.title}</h3>
              <p className="text-white/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
