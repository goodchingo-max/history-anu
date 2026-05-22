import Timeline from '../components/sections/Timeline';
import { motion } from 'framer-motion';

const TimelinePage = () => {
  return (
    <div className="pt-32 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center px-6 mb-20"
      >
        <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-4">CHRONOLOGICAL <span className="text-gold">FLOW</span></h1>
        <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.5em]">Temporal Mapping Synchronized</p>
      </motion.div>
      <Timeline />
    </div>
  );
};

export default TimelinePage;
