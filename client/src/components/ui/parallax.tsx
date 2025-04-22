import React, { ReactNode } from 'react';
import { useParallax } from '@/hooks/useParallax';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  easing?: number;
}

export const Parallax = ({
  children,
  speed = 0.1,
  direction = 'up',
  className = '',
  easing = 0.1
}: ParallaxProps) => {
  const { ref, style } = useParallax({ speed, direction, easing });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default Parallax;