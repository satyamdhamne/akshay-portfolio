import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaInstagram, FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface PortfolioItem {
  id: number;
  title: string;
  imageUrl: string;
  instagramLink?: string;
  description?: string;
  brand?: string;
}

type PortfolioCategory = "ads" | "campaigns" | "films" | "documentary" | "musicVideos";

const PortfolioSection = () => {
  const { ref, inView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("ads");
  const [resetAnimation, setResetAnimation] = useState(false);

  // Reset animation when changing categories
  useEffect(() => {
    setResetAnimation(true);
    const timer = setTimeout(() => {
      setResetAnimation(false);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Creating portfolio data with proper image paths (Instagram links temporarily removed)
  const adsData: PortfolioItem[] = [
    { 
      id: 1, 
      title: "IDFC Bank", 
      imageUrl: "/assets/idfcnbankad.jpeg",
      description: "Banking services campaign with modern design elements",
      brand: "IDFC First Bank",
      instagramLink: "https://www.instagram.com/reel/C_ldi-do_3k/?igsh=MXdmYnNzd3pvd3c0Ng=="
    },
    { 
      id: 2, 
      title: "BGMI", 
      imageUrl: "/assets/Pubg.jpeg",
      description: "Mobile gaming promotion featuring action elements",
      brand: "Battlegrounds Mobile India",
      instagramLink: "https://www.instagram.com/reel/DB_LhT4y1-v/?igsh=c3Nic3hpYzYzd3Ro"
    },
    { 
      id: 3, 
      title: "Spotify", 
      imageUrl: "/assets/spotifyad.jpeg",
      description: "Music streaming platform campaign",
      brand: "Spotify",
      instagramLink: "https://www.instagram.com/reel/ChSEFxFgx2N/?igsh=MWlzM2xnYnVjZTM3cw=="
    },
    { 
      id: 4, 
      title: "Boost", 
      imageUrl: "/assets/Boostad.jpeg",
      description: "Energy drink promotional campaign",
      brand: "Boost",
      instagramLink: "https://www.instagram.com/reel/Ch6LXeKpbnQ/?igsh=d3JvNTNrM25vcTNo"
    },
    { 
      id: 5, 
      title: "Reliance Smart", 
      imageUrl: "/assets/relad.jpeg",
      description: "Retail hypermarket chain promotional campaign",
      brand: "Reliance Smart",
      instagramLink: "https://www.instagram.com/reel/Cu1hzePOjjY/?igsh=eWFnOG95dXUzZnR5"
    },
    { 
      id: 6, 
      title: "Bisleri", 
      imageUrl: "/assets/bisleri ad.jpeg",
      description: "Premium water brand campaign",
      brand: "Bisleri",
      instagramLink: "https://www.instagram.com/reel/Cuy3x2fAYY6/?igsh=MWo0bjY3a2V0ZGMweg=="
    },
    { 
      id: 7, 
      title: "Pilgrim", 
      imageUrl: "/assets/pilgrimad.jpeg",
      description: "Skincare product campaign",
      brand: "Pilgrim",
      instagramLink: "https://www.instagram.com/reel/Cu1ZxMuNsqk/?igsh=dmhmbWtvOW4wbnA0"
    },
    { 
      id: 8, 
      title: "Starbucks", 
      imageUrl: "/assets/starbucksad.jpeg",
      description: "Luxury coffee campaign featuring premium branding elements",
      brand: "Starbucks Coffee",
      instagramLink: "https://www.instagram.com/reel/CuzCYvqgXxH/?igsh=aHB6aXY2dTQ1dTJ3"
    },
    { 
      id: 9, 
      title: "Canon", 
      imageUrl: "/assets/canonad.jpeg",
      description: "Professional photography equipment showcase",
      brand: "Canon Inc.",
      instagramLink: "https://www.instagram.com/reel/CuzEVUyghUc/?igsh=MTFxajd1OG5ibnpsZg=="
    },
    { 
      id: 10, 
      title: "Instax", 
      imageUrl: "/assets/instaxad.jpeg",
      description: "Vintage-inspired instant camera promotion",
      brand: "Fujifilm Instax",
      instagramLink: "https://www.instagram.com/reel/CwH4fjutdez/?igsh=azlobW1pcHFsZmp6"
    },
    { 
      id: 11, 
      title: "Wrangler", 
      imageUrl: "/assets/wranglerad.jpeg",
      description: "Denim lifestyle fashion campaign",
      brand: "Wrangler",
      instagramLink: "https://www.instagram.com/reel/Cu1klXOOlLh/?igsh=MTlxd3M4YWNmcDRlMg=="
    },
    { 
      id: 12, 
      title: "PayTm", 
      imageUrl: "/assets/paytmad.jpeg",
      description: "Digital payment solution advertisement",
      brand: "PayTm",
      instagramLink: "https://www.instagram.com/reel/CwHyMw8to07/?igsh=NHhpaW5zM2J6aHY4"
    },
    { 
      id: 13, 
      title: "Hyundai", 
      imageUrl: "/assets/hyundaismritiaad.jpeg",
      description: "Automotive brand promotional campaign",
      brand: "Hyundai Motors",
      instagramLink: "https://www.instagram.com/reel/CuZfydIAsE7/?igsh=em55bjZyY3N3OHIw"
    },
    { 
      id: 14, 
      title: "Treebo", 
      imageUrl: "/assets/treeboad.jpeg",
      description: "Hotel chain brand promotion",
      brand: "Treebo Hotels",
      instagramLink: "https://www.instagram.com/reel/Cuy-0VfAs5E/?igsh=am5kamRnY3B3bmdq"
    },
    { 
      id: 15, 
      title: "Realme", 
      imageUrl: "/assets/realmead.jpeg",
      description: "Next-gen smartphone technology showcase",
      brand: "Realme",
      instagramLink: "https://www.instagram.com/reel/Cu1TPpoLpRW/?igsh=MW4zZTA1NzBxa2Q5OQ=="
    },
    { 
      id: 16, 
      title: "Alief Soap", 
      imageUrl: "/assets/aliefsoapad.jpeg",
      description: "Premium skincare product campaign",
      brand: "Alief",
      instagramLink: "https://www.instagram.com/reel/Cu1ixkRswi-/?igsh=NDVqNmd5eDc4a3U="
    },
    { 
      id: 17, 
      title: "Healthify", 
      imageUrl: "/assets/healthifyad.jpeg",
      description: "Health and fitness app campaign",
      brand: "Healthify",
      instagramLink: "https://www.instagram.com/reel/CxzwDswtMGU/?igsh=MTJ2aHN4OXlwMmttcA=="
    },
    { 
      id: 18, 
      title: "MTR Foods", 
      imageUrl: "/assets/mtrad.jpeg",
      description: "Ready-to-eat food brand campaign",
      brand: "MTR Foods",
      instagramLink: "https://www.instagram.com/reel/CuyqXvcAJ4A/?igsh=MWJ5MmJ6bHpwNzg5aQ=="
    },
    { 
      id: 19, 
      title: "RBL Bank", 
      imageUrl: "/assets/rblbankad.jpeg",
      description: "Banking services and financial products campaign",
      brand: "RBL Bank",
      instagramLink: "https://www.instagram.com/reel/CuyyFT0A_uY/?igsh=MXh3aWthNGtzZWd3Nw=="
    },
    { 
      id: 20, 
      title: "Hauskinder", 
      imageUrl: "/assets/hauskinderad.jpeg",
      description: "Premium children's furniture and accessories",
      brand: "Hauskinder",
      instagramLink: "https://www.instagram.com/reel/Cuy3x2fAYY6/?igsh=MWo0bjY3a2V0ZGMweg=="
    },
    { 
      id: 21, 
      title: "FNP", 
      imageUrl: "/assets/fnpad.jpeg",
      description: "Floral and gifting e-commerce platform",
      brand: "Ferns N Petals",
      instagramLink: "https://www.instagram.com/reel/C9hi5a6yzVz/?igsh=bmNyeGFuMDc4Y3ky"
    },
  ];

  const campaignsData: PortfolioItem[] = [
    { 
      id: 1, 
      title: "Campaign 1", 
      imageUrl: "/assets/campaign-0.jpeg", 
      description: ""
    },
    { 
      id: 2, 
      title: "Campaign 2", 
      imageUrl: "/assets/campaign1.jpg", 
      description: ""
    },
    { 
      id: 3, 
      title: "Campaign 3", 
      imageUrl: "/assets/campaign2.jpeg", 
      description: ""
    },
    { 
      id: 4, 
      title: "Campaign 4", 
      imageUrl: "/assets/campaign3.jpeg", 
      description: ""
    },
    { 
      id: 5, 
      title: "Campaign 5", 
      imageUrl: "/assets/campaign4.jpeg", 
      description: ""
    },
    { 
      id: 6, 
      title: "Campaign 6", 
      imageUrl: "/assets/campaign5.jpeg", 
      description: ""
    },
    { 
      id: 7, 
      title: "Campaign 7", 
      imageUrl: "/assets/campaign6.jpeg", 
      description: ""
    }
  ];

  const filmsData: PortfolioItem[] = [
    { 
      id: 1, 
      title: "Crazxy", 
      imageUrl: "/assets/craxyposter.jpg", 
      description: "In Cinemas 28th Feb, 2025"
    },
    { 
      id: 2, 
      title: "Luckdown", 
      imageUrl: "/assets/luckdownposter.jpg",
      description: "...Be Positive"
    },
  ];

  const documentaryData: PortfolioItem[] = [
    { 
      id: 1, 
      title: "Behind The Scenes", 
      imageUrl: "/assets/documentry1.jpeg",
      description: "",
      instagramLink: "https://www.instagram.com/reel/Cw1okIPoC1a/?igsh=YzNpMXZ1N3B1Z3oz" 
    },
    { 
      id: 2, 
      title: "Shevatchi Ganesh Murti", 
      imageUrl: "/assets/bappaimgfordoc.jpg",
      description: "",
      instagramLink: "https://www.instagram.com/reel/Cx0Z97ttU9O/?igsh=a3o5dXVxeDd1cDUz" 
    },
  ];

  const musicVideosData: PortfolioItem[] = [
    { 
      id: 1, 
      title: "Promo Song", 
      imageUrl: "/assets/musicvideo1.jpeg",
      description: "Featuring Shruti Sharma",
      instagramLink: "https://www.instagram.com/reel/Cu1gk7ex1iz/?igsh=MXFxNjQxNDB3eTUzYg=="
    },
    { 
      id: 2, 
      title: "Song", 
      imageUrl: "/assets/musicvideo2.1.jpg",
      description: "Featuring Rupali Bhosale",
      instagramLink: "https://youtu.be/oNhK-_Ylx5c?si=801NIxkqsoM1WT73"
    },
  ];

  // Get active data based on selected category
  const getActiveData = (): PortfolioItem[] => {
    switch (activeCategory) {
      case "ads":
        return adsData;
      case "campaigns":
        return campaignsData;
      case "films":
        return filmsData;
      case "documentary":
        return documentaryData;
      case "musicVideos":
        return musicVideosData;
      default:
        return adsData;
    }
  };

  const activeData = getActiveData();

  // Aspect ratio based on category
  const getAspectRatio = () => {
    // Movie poster aspect ratio for films, documentary and music videos
    if (activeCategory === "documentary" || activeCategory === "films" || activeCategory === "musicVideos") {
      return "aspect-[2/3]"; // Movie poster aspect ratio (taller than wide)
    }
    return "aspect-[4/3]"; // Default 4:3 aspect ratio for other items
  };
  const aspect = getAspectRatio();
  
  // Get gradient style for hover effect based on category
  const getGradientForCategory = (category: PortfolioCategory) => {
    switch(category) {
      case "ads":
        return "from-blue-600/50 to-purple-600/50";
      case "campaigns":
        return "from-green-600/50 to-purple-600/50";
      case "films":
        return "from-pink-600/50 to-purple-600/50";
      case "documentary":
        return "from-blue-600/50 to-pink-600/50";
      case "musicVideos":
        return "from-green-600/50 to-pink-600/50";
      default:
        return "from-purple-600/50 to-pink-600/50";
    }
  };
  
  // Get a themed accent color for category labels and UI elements
  const getAccentColorForCategory = (category: PortfolioCategory) => {
    // Using the same color #4CBB17 for all categories
    return "text-[#4CBB17] font-medium";
  };

  // Create stagger animation for portfolio items
  const staggerAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  // Create grid ref for animation
  const [gridRef, gridInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    initialInView: true // Force initial render to be visible
  });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 md:py-32 bg-black"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-block mb-3">
            <motion.span 
              className="text-sm font-supreme uppercase tracking-widest relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-fuchsia-400 to-amber-300 bg-size-200 animate-gradient-x"
              transition={{ duration: 0.3 }}
            >
              Production Portfolio
            </motion.span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-clash font-bold mb-6 tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3CAC] to-[#784BA0]">FEATURED</span> WORK
          </h2>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            A curated selection of premium advertising, campaign, and film production projects
          </p>

          <div className="flex justify-center flex-wrap gap-3 mt-10 mb-14">
            {/* ADS button */}
            <button
              onClick={() => setActiveCategory("ads")}
              className={`relative group overflow-hidden text-base font-clash font-medium py-2 px-6 rounded-md transition-all duration-300 ${
                activeCategory === "ads"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                  : "bg-zinc-900 text-white/70 hover:text-white border border-zinc-800"
              }`}
            >
              {activeCategory === "ads" && (
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2B86C5] via-[#784BA0] to-[#2B86C5] bg-size-200 animate-gradient-x opacity-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
              <span className="relative z-10">ADS</span>
            </button>
            
            {/* CAMPAIGNS button */}
            <button
              onClick={() => setActiveCategory("campaigns")}
              className={`relative group overflow-hidden text-base font-clash font-medium py-2 px-6 rounded-md transition-all duration-300 ${
                activeCategory === "campaigns"
                  ? "bg-green-600 text-white shadow-lg shadow-green-900/30"
                  : "bg-zinc-900 text-white/70 hover:text-white border border-zinc-800"
              }`}
            >
              {activeCategory === "campaigns" && (
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00FF9D] via-[#784BA0] to-[#00FF9D] bg-size-200 animate-gradient-x opacity-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
              <span className="relative z-10">CAMPAIGNS</span>
            </button>
            
            {/* FILMS button */}
            <button
              onClick={() => setActiveCategory("films")}
              className={`relative group overflow-hidden text-base font-clash font-medium py-2 px-6 rounded-md transition-all duration-300 ${
                activeCategory === "films"
                  ? "bg-pink-600 text-white shadow-lg shadow-pink-900/30"
                  : "bg-zinc-900 text-white/70 hover:text-white border border-zinc-800"
              }`}
            >
              {activeCategory === "films" && (
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#FF3CAC] bg-size-200 animate-gradient-x opacity-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
              <span className="relative z-10">FILMS</span>
            </button>
            
            {/* DOCUMENTARY button */}
            <button
              onClick={() => setActiveCategory("documentary")}
              className={`relative group overflow-hidden text-base font-clash font-medium py-2 px-6 rounded-md transition-all duration-300 ${
                activeCategory === "documentary"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/30"
                  : "bg-zinc-900 text-white/70 hover:text-white border border-zinc-800"
              }`}
            >
              {activeCategory === "documentary" && (
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#2B86C5] via-[#784BA0] to-[#FF3CAC] bg-size-200 animate-gradient-x opacity-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
              <span className="relative z-10">DOCUMENTARY</span>
            </button>
            
            {/* MUSIC VIDEOS button */}
            <button
              onClick={() => setActiveCategory("musicVideos")}
              className={`relative group overflow-hidden text-base font-clash font-medium py-2 px-6 rounded-md transition-all duration-300 ${
                activeCategory === "musicVideos"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/30"
                  : "bg-zinc-900 text-white/70 hover:text-white border border-zinc-800"
              }`}
            >
              {activeCategory === "musicVideos" && (
                <motion.span 
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00FF9D] via-[#784BA0] to-[#FF3CAC] bg-size-200 animate-gradient-x opacity-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              )}
              <span className="relative z-10">MUSIC VIDEOS</span>
            </button>
          </div>
        </motion.div>

        <div 
          ref={gridRef}
          className={`grid ${
            activeCategory === "documentary" || activeCategory === "films" || activeCategory === "musicVideos" ? "grid-cols-1" : 
            activeCategory === "campaigns" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : 
            "grid-cols-1 md:grid-cols-2"
          } gap-5 md:gap-8 lg:gap-10 ${
            activeCategory === "documentary" || activeCategory === "films" || activeCategory === "musicVideos" ? "max-w-xs mx-auto" : ""
          }`}
        >
          {activeData.map((item, index) => (
            <motion.div 
              key={`${activeCategory}-${item.id}`}
              custom={index}
              initial="hidden"
              animate={(gridInView || activeCategory === "ads") ? "visible" : "hidden"}
              variants={staggerAnimationVariants}
              className={`${aspect} transition-shadow duration-300 group z-0 hover:shadow-xl hover:shadow-black/30`}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-zinc-900 shadow-xl">
                {/* Hover overlay - subtle shadow effect instead of gradient */}
                <div 
                  className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-20 
                  transition-opacity duration-300 ease-in-out z-10"
                ></div>
                
                {/* Content container */}
                <div className={`w-full h-full relative ${
                  activeCategory === 'films' || activeCategory === 'documentary' || activeCategory === 'musicVideos' ? 'bg-black pb-[35px]' : 
                  activeCategory === 'campaigns' ? 'bg-black pb-0' : 'bg-black pb-[90px]'
                }`}>
                  {/* Special handling for ads with white background container */}
                  {activeCategory === 'ads' ? (
                    <div className="absolute inset-0 flex items-center justify-center pb-[90px]">
                      <div className="w-full h-full bg-white rounded-t-md flex items-center justify-center p-4">
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="object-contain w-full h-full max-w-[90%] max-h-[90%]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Standard image handling for other categories */
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className={`w-full h-full absolute bottom-0 left-0 right-0 top-0 m-auto
                        ${activeCategory === 'films' ? 'object-cover' : 
                        activeCategory === 'documentary' ? 'object-contain scale-[0.85] translate-y-[-5%]' :
                        activeCategory === 'musicVideos' ? 'object-contain p-0 scale-[0.95]' :
                        activeCategory === 'campaigns' ? 'object-cover' : 'object-cover'}`}
                      loading="lazy"
                    />
                  )}
                
                  {/* Footer area - not shown for campaigns */}
                  {activeCategory !== 'campaigns' && (
                    <div className={`absolute bottom-0 w-full bg-black/95 ${activeCategory === 'documentary' ? 'pt-0.5 pb-0.5 px-2' : activeCategory === 'musicVideos' ? 'pt-0.5 pb-0.5 px-2' : 'pt-1 pb-1 px-3'}`}>
                      {/* First Row - Brand and Button */}
                      <div className={`flex ${activeCategory === 'documentary' || activeCategory === 'films' || activeCategory === 'musicVideos' ? 'flex-col justify-center items-center' : 'justify-between items-center'} ${activeCategory === 'documentary' || activeCategory === 'films' || activeCategory === 'musicVideos' ? 'mb-1' : 'mb-2'}`}>
                        <div>
                          {/* Brand Tag or Title */}
                          {((item.brand && activeCategory === 'ads') || activeCategory === 'documentary' || activeCategory === 'films') && (
                            <span className={`${activeCategory === 'documentary' ? 'text-[14px]' : activeCategory === 'films' ? 'text-[16px]' : 'text-[14px]'} font-clash ${getAccentColorForCategory(activeCategory)} tracking-wider`}>
                              {activeCategory === 'ads' ? item.brand : item.title}
                            </span>
                          )}
                        </div>
                        
                        {/* Featuring info for Music Videos - placed before button */}
                        {activeCategory === 'musicVideos' && (
                          <div className="flex justify-center items-center mb-2">
                            <span className="text-xs font-supreme text-white mr-1">Featuring:</span>
                            <span className="text-xs font-supreme text-[#4CBB17] font-medium">
                              {item.title === "Promo Song" ? "Shruti Sharma" :
                               item.title === "Song" ? "Rupali Bhosale" : ""}
                            </span>
                          </div>
                        )}
                        
                        {/* Featuring info for Documentary - placed between title and button */}
                        {activeCategory === 'documentary' && (
                          <div className="flex justify-center items-center my-1">
                            <span className="text-xs font-supreme text-white mr-1">Featuring:</span>
                            <span className="text-xs font-supreme text-[#4CBB17] font-medium">
                              {item.title === "Behind The Scenes" ? "Various Artists" :
                               item.title === "Shevatchi Ganesh Murti" ? "Jitendra Joshi" : ""}
                            </span>
                          </div>
                        )}
                      
                        <div className={activeCategory === 'documentary' || activeCategory === 'films' || activeCategory === 'musicVideos' ? 'mt-1' : ''}>
                          {(activeCategory === 'ads' || activeCategory === 'musicVideos' || activeCategory === 'documentary' || activeCategory === 'films') && item.instagramLink && (
                            <button
                              className={`view-ad-button inline-flex items-center gap-2 text-white 
                                ${activeCategory === 'documentary' ? 'text-[13px] px-3 py-1' : 
                                  activeCategory === 'films' ? 'text-[14px] px-4 py-1.5' : 
                                  activeCategory === 'musicVideos' ? 'text-[14px] px-6 py-1.5' :
                                  'text-[14px] px-4 py-1.5'}
                                font-supreme rounded-full border ${activeCategory === 'musicVideos' || activeCategory === 'ads' || activeCategory === 'documentary' ? 'border-[#222]' : 'border-[#F16767]'} cursor-pointer ${activeCategory === 'musicVideos' || activeCategory === 'ads' || activeCategory === 'documentary' ? 'bg-[#111]/80' : 'bg-transparent'}`}
                              style={{
                                transition: "all 0.2s ease-in-out",
                                position: "relative",
                                zIndex: 50
                              }}
                              onClick={(e) => {
                                e.stopPropagation(); // Stop event bubbling
                                e.preventDefault(); // Prevent default behavior
                                console.log("Button clicked", item.instagramLink);
                                
                                // Try multiple approaches to open the link
                                try {
                                  // Method 1: Basic window.open
                                  const newWindow = window.open(item.instagramLink, '_blank');
                                  
                                  // Method 2: If window.open returns null (was blocked)
                                  if (!newWindow) {
                                    // Create and click a temporary link
                                    const link = document.createElement('a');
                                    link.href = item.instagramLink || '#';
                                    link.target = '_blank';
                                    link.rel = 'noopener noreferrer';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                  }
                                } catch (err) {
                                  console.error("Error opening link:", err);
                                  // Method 3: Last resort
                                  window.location.href = item.instagramLink || '#';
                                }
                              }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                              </svg>
                              <span>
                                {activeCategory === 'ads' ? 'View Ad' : 
                                 activeCategory === 'musicVideos' ? 'Play Music Video' : 
                                 activeCategory === 'films' ? 'Watch Film' :
                                 'View Documentary'}
                              </span>
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {/* Description for Ads */}
                      {item.description && activeCategory === 'ads' && (
                        <p className="text-xs text-white/80 font-supreme line-clamp-2 mb-1">
                          {item.description}
                        </p>
                      )}
                      
                      {/* For Music Videos, the Featuring text is already handled elsewhere */}
                      
                      {/* Special centered description for Documentary */}
                      {/* Description removed for documentary */}
                      
                      {/* Featuring info for Films */}
                      {activeCategory === 'films' && (
                        <div className="flex justify-center items-center mt-1">
                          <span className="text-xs font-supreme text-white mr-1">Featuring:</span>
                          <span className="text-xs font-supreme text-[#4CBB17] font-medium">
                            {item.title === "Crazxy" ? "Soham Shah" : 
                            item.title === "Luckdown" ? "Ankush Chaudhari and Prajakta Mali" : ""}
                          </span>
                        </div>
                      )}
                      
                      {/* Instagram button removed as we now have the View Ad button */}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;