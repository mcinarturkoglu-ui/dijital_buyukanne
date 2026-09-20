"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  isPlaceholder?: boolean;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  isPlaceholder = false,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated && !isPlaceholder && value > 0) {
      setHasAnimated(true);
      const start = 0;
      const end = value;
      const increment = end / (duration / 16);
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, hasAnimated, value, duration, isPlaceholder]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-navy mb-2">
        {isPlaceholder || value === 0 ? (
          <span className="text-turquoise">0+</span>
        ) : (
          <span>
            {prefix}
            {count.toLocaleString("tr-TR")}
            {suffix}
          </span>
        )}
      </div>
      <p className="text-navy/60 text-sm font-medium">{label}</p>
    </div>
  );
}

export default AnimatedCounter;
