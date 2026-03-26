import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/animations';

export default function HeroAnimated() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <div>
        <motion.span variants={fadeIn} className="text-amber-200 font-medium tracking-[0.2em] uppercase text-xs mb-6 block">
          Premium Coconut Sugar Exporter
        </motion.span>
        <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
          Delivering Natural <br/>Sweetness with <br/><span className="italic text-amber-300">Integrity</span>
        </motion.h1>
        <motion.p variants={fadeIn} className="text-sm md:text-base text-amber-200/90 max-w-xl mb-8 leading-relaxed">
          Elevating Indonesian heritage to the global stage. We produce the finest organic coconut sugar, bridging traditional farming with international standards.
        </motion.p>
        {/* Buttons — toned down size */}
        <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
          <a href="#products" className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 group shadow-md">
            Lihat Produk Kami
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <a href="#about" className="border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded-lg font-semibold text-sm backdrop-blur-sm transition-all">
            Pelajari Lebih Lanjut
          </a>
        </motion.div>
      </div>

      {/* Hero product image — desktop only */}
      <motion.div variants={fadeIn} className="relative hidden lg:block">
        <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
          <img
            alt="Premium Coconut Sugar"
            className="w-full h-full object-cover"
            src="/images/hero-coconut-sugar.png"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl max-w-xs">
          <p className="text-amber-700 font-bold text-base mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>&ldquo;The Gold of Java&rdquo;</p>
          <p className="text-amber-900/70 text-xs leading-relaxed">Harvested sustainably from the blossoms of organic coconut palms in Central Java.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
