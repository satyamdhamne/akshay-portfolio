import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const { ref, inView } = useScrollAnimation();
  
  const testimonials = [
    {
      text: "Working with this creative visionary transformed our project completely. The attention to detail and innovative approach brought our story to life in ways we couldn't have imagined.",
      name: "Sarah J.",
      role: "Film Producer, Ember Studios",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
      text: "Exceptional talent and professionalism. Our documentary series benefited enormously from the creative direction provided, resulting in festival recognition and audience acclaim.",
      name: "Michael T.",
      role: "Executive Producer, Horizon Media",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
  ];
  
  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 bg-background/80 section-transition ${inView ? "section-visible" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-clash font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">CLIENT</span> TESTIMONIALS
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="p-8 rounded-xl bg-white/5 border border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="flex gap-2 mb-4 text-accent">
                {[...Array(5)].map((_, starIndex) => (
                  <i key={starIndex} className="ri-star-fill"></i>
                ))}
              </div>
              <p className="text-lg mb-6 text-white/80 italic">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-clash font-bold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
