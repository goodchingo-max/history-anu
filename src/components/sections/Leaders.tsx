import { motion } from 'framer-motion';
import { Crown, Sword, ScrollText, Shield } from 'lucide-react';

const leaders = [
  {
    name: 'Julius Caesar',
    title: 'Dictator Perpetuo',
    empire: 'Roman Empire',
    trait: 'Strategic Brilliance',
    icon: <Shield size={24} className="text-gold" />,
    color: 'hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]'
  },
  {
    name: 'Napoleon Bonaparte',
    title: 'Emperor of the French',
    empire: 'First French Empire',
    trait: 'Military Genius',
    icon: <Sword size={24} className="text-gold" />,
    color: 'hover:shadow-[0_0_50px_rgba(139,0,0,0.3)]'
  },
  {
    name: 'Alexander the Great',
    title: 'King of Macedonia',
    empire: 'Macedonian Empire',
    trait: 'Unconquered',
    icon: <Crown size={24} className="text-gold" />,
    color: 'hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]'
  },
  {
    name: 'Genghis Khan',
    title: 'Universal Ruler',
    empire: 'Mongol Empire',
    trait: 'Tactical Terror',
    icon: <ScrollText size={24} className="text-gold" />,
    color: 'hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]'
  }
];

const Leaders = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-4">LEGENDARY <span className="text-gold">LEADERS</span></h2>
          <p className="text-white/40 tracking-[0.5em] uppercase text-[10px]">The Architects of Fate</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`p-8 glass-gold border border-white/5 relative group transition-all duration-500 cursor-pointer overflow-hidden ${leader.color}`}
            >
              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit glass rounded-sm group-hover:scale-110 transition-transform duration-500">
                  {leader.icon}
                </div>
                <h3 className="font-cinzel text-2xl font-black text-white mb-1 group-hover:text-gold transition-colors duration-300 uppercase tracking-tighter">
                  {leader.name}
                </h3>
                <p className="font-cinzel text-[10px] text-gold/60 mb-8 tracking-widest uppercase">
                  {leader.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
