import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6 italic">ABOUT THE <span className="text-gold">PROJECT</span></h1>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-12"></div>
        </motion.div>

        <div className="space-y-12 text-white/70 font-light leading-relaxed text-lg">
          <p>
            <span className="text-gold font-cinzel font-bold text-2xl mr-2">ANU HISTORY</span> is a next-generation historical web experience designed to immerse users in the echoes of the past. It is more than just an archive; it is a cinematic journey through time, empires, and the lives of those who shaped our world.
          </p>

          <p>
            Born from the desire to make history feel alive, we combine high-end technology with meticulous historical research to create an atmosphere that feels like entering a forbidden archive from the future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="p-8 glass border border-white/5">
              <h3 className="font-cinzel text-xl font-bold text-gold mb-4 uppercase tracking-widest">The Vision</h3>
              <p className="text-sm">To bridge the gap between ancient stories and modern digital experiences, ensuring that the lessons of history are never forgotten.</p>
            </div>
            <div className="p-8 glass border border-white/5">
              <h3 className="font-cinzel text-xl font-bold text-gold mb-4 uppercase tracking-widest">The Technology</h3>
              <p className="text-sm">Powered by React, Three.js, GSAP, and Framer Motion to deliver "Apple-level" smoothness and a premium "AAA game menu" feel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
