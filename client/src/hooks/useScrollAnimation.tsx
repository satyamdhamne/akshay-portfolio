import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);
  
  return { ref, inView: inView || hasAnimated };
};
