import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

const battlePoints = [
  { id: 1, x: '25%', y: '35%', name: 'Battle of Austerlitz', year: '1805', status: 'critical' },
  { id: 2, x: '45%', y: '40%', name: 'Battle of Cannae', year: '216 BC', status: 'decisive' },
  { id: 3, x: '65%', y: '30%', name: 'Battle of Gaugamela', year: '331 BC', status: 'conquest' },
  { id: 4, x: '35%', y: '55%', name: 'Normandy Landings', year: '1944', status: 'breakthrough' },
  { id: 5, x: '55%', y: '50%', name: 'Siege of Baghdad', year: '1258', status: 'annihilation' },
];

const WarMap = () => {
  return (
    <section className="py-32 px-6 bg-secondary/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="font-cinzel text-4xl md:text-6xl font-bold mb-4 tracking-tighter">TACTICAL <span className="text-accent italic">ARCHIVE</span></h2>
            <p className="text-white/40 font-mono text-xs uppercase tracking-[0.4em]">Strategic Operations & Decisive Conflicts</p>
          </div>
        </div>

        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full glass border border-white/5 overflow-hidden rounded-sm group">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          {battlePoints.map((point) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: point.id * 0.2, type: 'spring' }}
              style={{ left: point.x, top: point.y }}
              className="absolute group/point cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 -m-4 rounded-full bg-accent/20 animate-ping"></div>
                <div className="w-3 h-3 rounded-full bg-accent relative z-10 border border-white/50"></div>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 p-4 glass-gold opacity-0 group-hover/point:opacity-100 transition-all duration-300 pointer-events-none z-20">
                  <p className="font-cinzel text-[10px] text-gold mb-1">{point.year}</p>
                  <p className="font-cinzel text-sm font-bold text-white uppercase tracking-tighter mb-2">{point.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WarMap;
