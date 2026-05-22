import GlobeScene from '../components/three/GlobeScene';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Shield, Info, Crosshair, Map as MapIcon } from 'lucide-react';

const GlobePage = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">
      <GlobeScene onMarkerSelect={(marker) => setSelectedEvent(marker)} />

      {/* UI Overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-12">
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-md p-8 glass-gold border border-gold/10"
          >
            <span className="font-mono text-[10px] text-gold tracking-[0.4em] mb-2 block uppercase">Orbital Perspective</span>
            <h1 className="font-cinzel text-4xl font-bold mb-4 italic">INTERACTIVE <span className="text-gold">GLOBE</span></h1>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Navigate the global theatre of history. Each node represents a pivotal archive entry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4 items-end"
          >
            <div className="p-4 glass border border-white/5 text-right">
              <p className="text-[10px] font-mono text-gold tracking-[0.2em] mb-1 uppercase">System Status</p>
              <p className="text-[10px] font-mono text-white/40 uppercase">ORBIT_LOCKED // DATA_SYNC_98%</p>
            </div>
            <div className="flex gap-2">
              <button className="p-3 glass hover:bg-gold/10 transition-colors pointer-events-auto"><Crosshair size={18} className="text-gold" /></button>
              <button className="p-3 glass hover:bg-gold/10 transition-colors pointer-events-auto"><MapIcon size={18} className="text-gold" /></button>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="absolute left-1/2 bottom-32 -translate-x-1/2 w-full max-w-xl p-8 glass border border-gold/20 pointer-events-auto"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
              >
                ✕
              </button>
              <div className="flex gap-6">
                <div className="w-24 h-24 glass-gold border border-gold/10 flex items-center justify-center shrink-0">
                   <Shield size={40} className="text-gold opacity-50" />
                </div>
                <div>
                  <span className="font-cinzel text-gold text-xs tracking-[0.3em] uppercase block mb-1">{selectedEvent.year} // ARCHIVE_{selectedEvent.id}</span>
                  <h3 className="font-cinzel text-2xl font-black text-white uppercase mb-4 tracking-tighter">{selectedEvent.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Classified data entry regarding the {selectedEvent.name}. Tactical significance: High. Empire impact: Decisive.
                  </p>
                  <button className="flex items-center gap-2 text-gold font-cinzel text-[10px] tracking-widest hover:text-white transition-all font-bold group">
                    DECRYPT FULL DOSSIER <Info size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between items-end">
          <div className="font-mono text-[8px] text-white/20 tracking-[0.2em] leading-relaxed">
            LAT_LONG_COORDINATES: SYNCED<br />
            ORBITAL_VELOCITY: 0.0005 RAD/S<br />
            ATMOSPHERIC_DENSITY: NOMINAL
          </div>
          <div className="flex gap-4 pointer-events-auto">
             <button className="px-6 py-2 glass-gold border border-gold/20 text-gold font-cinzel text-[10px] tracking-widest hover:bg-gold hover:text-black transition-all">SCAN FOR NODES</button>
             <button
               onClick={() => setSelectedEvent(null)}
               className="px-6 py-2 glass border border-white/10 text-white font-cinzel text-[10px] tracking-widest hover:bg-white hover:text-black transition-all"
             >
               RESET VIEW
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobePage;
