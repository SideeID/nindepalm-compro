import React from 'react';
import { motion } from 'framer-motion';
import { MILESTONES } from '@/lib/constants';

const timelineImages: Record<string, string> = {
  '2004': '/images/about-2004-palm-forest.png',
  '2009': '/images/about-2009-factory.png',
  '2018': '/images/about-2018-shipping.png',
  '2022': '/images/about-2009-factory.png',
  '2025': '/images/about-2018-shipping.png',
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  }
};

export default function TimelineAnimated() {
  return (
    <div className="space-y-16">
      {MILESTONES.map((milestone, index) => {
        const isEven = index % 2 === 0;
        const imgSrc = timelineImages[milestone.year] ?? '/images/about-2004-palm-forest.png';

        return (
          <motion.div
            key={milestone.year}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={itemVariants}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}
          >
            {/* Desktop text */}
            <div className={`md:w-1/2 hidden md:block ${isEven ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`}>
              <h3 className="text-2xl font-bold text-amber-700 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{milestone.title}</h3>
              <p className="text-amber-800/80 text-sm leading-relaxed">{milestone.description}</p>
            </div>

            {/* Year badge — FIX #2: smaller circle */}
            <div className="w-12 h-12 rounded-full bg-amber-500 border-4 border-amber-100 flex items-center justify-center text-white font-bold text-xs z-10 shrink-0 shadow-md">
              {milestone.year}
            </div>

            {/* Image side */}
            <div className={`md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
              {/* Mobile text */}
              <div className="bg-white p-5 rounded-xl shadow-sm md:hidden border border-amber-100 mb-3">
                <h3 className="text-lg font-bold text-amber-700 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{milestone.title}</h3>
                <p className="text-amber-800/80 text-sm">{milestone.description}</p>
              </div>
              <div className="aspect-video bg-amber-200 rounded-xl overflow-hidden shadow-md">
                <img
                  alt={milestone.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src={imgSrc}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
