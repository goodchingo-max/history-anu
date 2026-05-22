import WarMap from '../components/sections/WarMap';
import { motion } from 'framer-motion';

const Archive = () => {
  return (
    <div className="pt-32 min-h-screen">
      <div className="px-6 max-w-7xl mx-auto mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-cinzel text-5xl md:text-7xl font-bold mb-6"
        >
          WAR <span className="text-accent italic">ARCHIVE</span>
        </motion.h1>
        <p className="text-white/50 max-w-2xl mx-auto font-light">
          A collection of tactical data from the most significant conflicts in human history. Every coordinate holds a ghost.
        </p>
      </div>
      <WarMap />
      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-6 glass border border-white/5 group hover:border-accent/30 transition-all cursor-pointer">
              <span className="text-accent font-mono text-xs block mb-4 tracking-tighter">DECRYPTED_ENTRY_0{i}</span>
              <h3 className="font-cinzel text-xl font-bold text-white mb-2 group-hover:text-accent">Operation Fragment {i}</h3>
              <p className="text-white/30 text-sm leading-relaxed">Encrypted tactical maneuvers from the late 20th century. Classified status: LEVEL 4.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
