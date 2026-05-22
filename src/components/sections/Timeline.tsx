import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const events = [
  {
    year: '753 BC',
    title: 'Founding of Rome',
    description: 'The legendary founding of the city that would become the heart of the greatest empire in history.',
    type: 'empire'
  },
  {
    year: '334 BC',
    title: 'Alexander the Great',
    description: 'Alexander begins his campaign to conquer the Persian Empire, reshaping the known world.',
    type: 'war'
  },
  {
    year: '1206',
    title: 'Genghis Khan',
    description: 'Temujin is proclaimed Genghis Khan, uniting the Mongol tribes and starting the largest contiguous land empire.',
    type: 'empire'
  },
  {
    year: '1804',
    title: 'Napoleon Coronation',
    description: 'Napoleon Bonaparte crowns himself Emperor of the French, beginning a new era of European conflict.',
    type: 'war'
  },
  {
    year: '1945',
    title: 'Fall of Empires',
    description: 'The end of WWII marks the collapse of traditional colonial empires and the dawn of a new global order.',
    type: 'war'
  }
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 px-6 relative max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-24">
        <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-4">THE CHRONICLES</h2>
        <div className="w-24 h-1 bg-gold mx-auto"></div>
      </div>

      <div className="relative">
        <motion.div
          style={{ scaleY }}
          className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold origin-top hidden md:block"
        />

        <div className="flex flex-col gap-24">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center justify-between w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-[45%]">
                <div className={`p-8 glass-gold border border-gold/10 hover:border-gold/30 transition-all duration-500 group ${
                   index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <span className="font-cinzel text-gold text-4xl font-black mb-2 block">{event.year}</span>
                  <h3 className="font-cinzel text-2xl font-bold mb-4 text-white group-hover:text-gold transition-colors duration-300 uppercase tracking-widest">{event.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light">{event.description}</p>
                </div>
              </div>

              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-gold z-10">
                <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20"></div>
              </div>

              <div className="w-full md:w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
