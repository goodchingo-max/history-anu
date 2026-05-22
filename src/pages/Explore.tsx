import { motion } from 'framer-motion';
import ArchiveSearch from '../components/common/ArchiveSearch';

const Explore = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6">EXPLORE <span className="text-gold italic">HISTORY</span></h1>
          <p className="text-white/40 max-w-2xl mx-auto font-light text-lg tracking-wide">
            Access the deep archives of human civilization. Filter the echoes of time by leader, conflict, or empire.
          </p>
        </motion.div>

        <ArchiveSearch />

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Ancient Era', desc: 'The dawn of organized civilization.' },
            { name: 'Medieval Age', desc: 'An era of faith, steel, and shadow.' },
            { name: 'Modern Conflict', desc: 'The ultimate collision of global powers.' }
          ].map((era, i) => (
            <motion.div
              key={era.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="h-96 glass border border-white/5 p-10 flex flex-col justify-end group cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <span className="text-gold font-mono text-[10px] tracking-[0.4em] mb-4 block">SECTOR_0{i+1}</span>
                <h3 className="font-cinzel text-3xl font-bold group-hover:text-gold transition-colors">{era.name}</h3>
                <p className="text-white/40 text-sm mt-4 leading-relaxed">{era.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
