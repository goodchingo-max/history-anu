import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.8
      });

      gsap.to(".hero-bg-overlay", {
        opacity: 0.6,
        duration: 2,
        ease: "power2.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="hero-bg-overlay absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-0 z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mb-6 inline-block px-4 py-1 border border-gold/30 rounded-full glass"
        >
          <span className="font-cinzel text-[10px] tracking-[0.5em] text-gold uppercase">THE FORBIDDEN ARCHIVE</span>
        </motion.div>

        <h1 ref={titleRef} className="font-cinzel text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none">
          History Was <span className="text-gold italic">Never</span> Dead.
        </h1>

        <p ref={subtitleRef} className="font-sans text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light tracking-wide">
          Every empire leaves a ghost. Step into the echoes of time and uncover the truth they tried to bury.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="px-10 py-4 bg-gold text-black font-cinzel font-bold tracking-widest hover:bg-white transition-all duration-500 rounded-sm relative group overflow-hidden">
            <span className="relative z-10">EXPLORE ARCHIVE</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>

          <button className="px-10 py-4 border border-white/20 glass text-white font-cinzel font-bold tracking-widest hover:border-gold transition-all duration-500 rounded-sm">
            VIEW TIMELINE
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-cinzel text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll to descend</span>
        <ChevronDown className="text-gold animate-bounce" size={20} />
      </motion.div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
    </section>
  );
};

export default Hero;
