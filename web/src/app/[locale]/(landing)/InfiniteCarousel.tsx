'use client';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';

export const InfiniteCarousel = ({ children, speed = 1 }: { children: React.ReactNode, speed?: number }) => {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isHovered) return; // Pausa al pasar el mouse
    
    const moveBy = speed * (delta / 20);
    baseX.set(baseX.get() - moveBy);

    if (containerRef.current) {
        const halfWidth = containerRef.current.scrollWidth / 2;
        if (baseX.get() <= -halfWidth) {
            baseX.set(0);
        }
    }
  });

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing">
      <motion.div 
        ref={containerRef}
        style={{ x: baseX }}
        className="flex gap-6 whitespace-nowrap"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        drag="x"
        dragConstraints={{ left: -2000, right: 0 }}
        onDragStart={() => setIsHovered(true)}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};