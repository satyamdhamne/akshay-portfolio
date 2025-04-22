import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  easing?: number;
}

export const useParallax = ({ 
  speed = 0.1, 
  direction = 'up',
  easing = 0.1 
}: ParallaxOptions = {}) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const { top, height } = rect;
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the viewport middle
      const distanceFromCenter = top - windowHeight / 2 + height / 2;
      
      // Calculate the offset based on scroll position
      const targetOffset = distanceFromCenter * speed;
      
      // Smoothly animate to the target offset
      const animate = () => {
        if (!elementRef.current) return;
        
        setOffset(prev => {
          const diff = targetOffset - prev;
          const newOffset = prev + diff * easing;
          
          if (Math.abs(diff) < 0.05) {
            frameRef.current = null;
            return targetOffset;
          }
          
          frameRef.current = requestAnimationFrame(animate);
          return newOffset;
        });
      };
      
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [speed, easing]);
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };
  
  return { ref: elementRef, style: { transform: getTransform() } };
};