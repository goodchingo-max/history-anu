import { motion } from 'framer-motion';
import { Crosshair, Target, ShieldAlert } from 'lucide-react';

const battlePoints = [
  { id: 1, x: '25%', y: '35%', name: 'Battle of Austerlitz', year: '1805', status: 'critical' },
  { id: 2, x: '45%', y: '40%', name: 'Battle of Cannae', year: '216 BC', status: 'decisive' },
  { id: 3, x: '65%', y: '30%', name: 'Battle of Gaugamela', year: '331 BC', status: 'conquest' },
  { id: 4, x: '35%', y: '55%', name: 'Normandy Landings', year: '1944', status: 'breakthrough' },
  { id: 5, x: '55%', y: '50%', name: 'Siege of Baghdad', year: '1258', status: 'annihilation' },
];

const WarMap = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full glass border border-accent/20 overflow-hidden rounded-sm group">
          {/* Tactical Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#8B0000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

          {/* Scanning Line Effect */}
          <motion.div
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-[2px] bg-accent/30 z-20 blur-[1px]"
          />

          {/* Map Grid Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
            <defs>
              <pattern id="grid-red" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#8B0000" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-red)" />
          </svg>

          {/* Battle Points */}
          {battlePoints.map((point) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: point.id * 0.2, type: 'spring' }}
              style={{ left: point.x, top: point.y }}
              className="absolute group/point cursor-pointer z-30"
            >
              <div className="relative">
                <div className="absolute inset-0 -m-6 rounded-full bg-accent/10 animate-ping duration-[3s]"></div>
                <div className="w-4 h-4 rounded-full bg-accent relative z-10 border-2 border-white/30 shadow-[0_0_20px_#8B0000]"></div>

                {/* Tactical Label */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 p-4 glass-gold border border-accent/30 opacity-0 group-hover/point:opacity-100 transition-all duration-300 pointer-events-none scale-90 group-hover/point:scale-100 origin-bottom">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldAlert size={12} className="text-accent" />
                    <span className="font-mono text-[8px] text-accent tracking-[0.2em] uppercase">Active Conflict</span>
                  </div>
                  <p className="font-cinzel text-[10px] text-gold mb-1">{point.year}</p>
                  <p className="font-cinzel text-lg font-black text-white uppercase tracking-tighter mb-2">{point.name}</p>
                  <div className="pt-2 border-t border-white/10 flex justify-between">
                     <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest">Severity:</span>
                     <span className="font-mono text-[8px] text-accent uppercase tracking-widest font-bold">LEVEL_{point.status.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Tactical Decorations */}
          <div className="absolute top-6 left-6 p-4 font-mono text-[10px] text-accent/40 tracking-tighter leading-relaxed">
             <div className="flex items-center gap-2 mb-2">
               <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
               SYSTEM_LIVE: RECONSTRUCTING_WAR_THEATER
             </div>
             COORDINATES: {Math.random().toFixed(4)}°N / {Math.random().toFixed(4)}°E<br />
             BANDWIDTH: 4.2 TB/S<br />
             DECRYPTION: ACTIVE
          </div>

          <div className="absolute bottom-6 right-6 flex items-center gap-4">
            <div className="text-right">
              <p className="font-mono text-[8px] text-white/20 uppercase tracking-widest">Tactical Overlay</p>
              <p className="font-mono text-[10px] text-accent tracking-tighter">BATTLE_SCAN_ALPHA_1</p>
            </div>
            <Crosshair className="text-accent animate-spin duration-[10s]" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarMap;
