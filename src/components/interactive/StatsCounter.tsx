import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 1000, suffix: " kg", label: "Granules Production / Day" },
  { value: 500, suffix: " kg", label: "Wheel Production / Day" },
  { value: 500, suffix: " kg", label: "Dakon Production / Day" }
];

export default function StatsCounter() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = easeOutExpo(step / steps);
      
      setCounts(stats.map(stat => Math.floor(stat.value * progress)));

      if (step >= steps) {
        clearInterval(timer);
        setCounts(stats.map(s => s.value));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  // Easing function
  function easeOutExpo(x: number): number {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {stats.map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
          className="p-6 rounded-xl bg-white/5 border border-amber-900/50 backdrop-blur-md text-center group hover:bg-white/10 hover:border-amber-700/50 transition-all duration-500"
        >
          <div className="text-xl md:text-2xl font-bold text-amber-400 mb-3 group-hover:scale-105 transition-transform duration-500" style={{ fontFamily: 'Playfair Display, serif' }}>
            {counts[i].toLocaleString()}{stat.suffix}
          </div>
          <div className="text-amber-100 font-semibold uppercase tracking-wider text-[10px]">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
