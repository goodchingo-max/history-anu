import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Quote = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} className="h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.div
          style={{ y }}
          className="font-cinzel text-[20vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none"
        >
          ETERNAL EMPIRES
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h2 className="font-cinzel text-4xl md:text-7xl font-bold leading-tight mb-8">
          "Empires are built by men. <br />
          <span className="text-gold italic">Destroyed by time.</span>"
        </h2>
      </motion.div>
    </section>
  );
};

export default Quote;
