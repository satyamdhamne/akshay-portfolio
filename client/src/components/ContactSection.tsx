import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { FaImdb, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactSection = () => {
  const { ref, inView } = useScrollAnimation();
  
  const contactInfo = [
    {
      icon: <MdEmail className="text-2xl text-accent" />,
      title: "Email",
      content: "akshupakhale@gmail.com",
      href: "mailto:akshupakhale@gmail.com",
    },
    {
      icon: <MdPhone className="text-2xl text-accent" />,
      title: "Phone",
      content: "+91 9700410079",
      href: "tel:+919700410079",
    },
    {
      icon: <MdLocationOn className="text-2xl text-accent" />,
      title: "Location",
      content: "Mumbai, India",
      href: null,
    },
  ];
  
  const socialLinks = [
    { href: "https://www.instagram.com/theakshaynarayan", icon: <FaInstagram size={28} />, label: "Instagram" },
    { href: "https://wa.me/919700410079", icon: <FaWhatsapp size={28} />, label: "WhatsApp" },
    { href: "mailto:akshupakhale@gmail.com", icon: <MdEmail size={28} />, label: "Email" },
    { href: "https://m.imdb.com/name/nm13308970/?ref_=ext_shr_lnk", icon: <FaImdb size={28} />, label: "IMDb" },
  ];
  
  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 md:py-32 section-transition ${inView ? "section-visible" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-clash font-bold mb-6 tracking-tight">
              <span className="gradient-text">LET'S</span> COLLABORATE
            </h2>
            <p className="text-lg mb-8 text-white/80">
              Ready to bring your vision to life? Reach out to discuss your project and explore how we can create something extraordinary together.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-clash font-medium mb-2">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-white/80 hover:text-white transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-white/80">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <motion.h3 
                className="text-2xl font-clash font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Connect With Me
              </motion.h3>
              <motion.div 
                className="flex justify-center space-x-8"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-all transform hover:scale-110"
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
