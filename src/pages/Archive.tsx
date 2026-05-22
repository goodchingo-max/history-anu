import WarMap from '../components/sections/WarMap';
import { motion } from 'framer-motion';
import { archiveData } from '../constants/archiveData';
import { Link } from 'react-router-dom';
import { ShieldAlert, Crosshair, Target } from 'lucide-react';

const Archive = () => {
  const warData = archiveData.filter(item => item.category === 'war');

  return (
    <div className="pt-32 min-h-screen bg-black">
      <div className="px-6 max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-l-4 border-accent pl-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-4 text-accent"
            >
              <ShieldAlert size={24} />
              <span className="font-mono text-sm tracking-[0.5em] uppercase font-bold">Classified Military Data</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-cinzel text-5xl md:text-8xl font-black text-white leading-none tracking-tighter"
            >
              WAR <span className="text-accent italic">ARCHIVE</span>
            </motion.h1>
          </div>
          <div className="text-right">
            <p className="text-white/40 max-w-md font-mono text-xs uppercase leading-relaxed tracking-widest">
              Neural reconstructions of historical combat theaters.
              Tactical significance: ABSOLUTE.
              Access level: OMEGA.
            </p>
          </div>
        </div>
      </div>

      <WarMap />

      <div className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-16">
           <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-accent/50 to-accent"></div>
           <h2 className="font-cinzel text-2xl font-bold text-accent tracking-[0.3em]">CONFLICT DOSSIERS</h2>
           <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-accent/50 to-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {warData.map((war, i) => (
            <Link to={`/dossier/${war.id}`} key={war.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-10 glass border border-accent/20 hover:border-accent transition-all duration-500 overflow-hidden"
              >
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundImage: 'radial-gradient(#ff0000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-3 glass-gold border border-accent/20 text-accent group-hover:scale-110 transition-transform">
                      <Target size={32} />
                    </div>
                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase">ID: {war.id.toUpperCase()}</span>
                  </div>

                  <h3 className="font-cinzel text-3xl font-black text-white mb-2 group-hover:text-accent transition-colors tracking-tighter">
                    {war.name}
                  </h3>
                  <p className="font-mono text-xs text-accent/60 mb-6 tracking-widest uppercase">{war.year}</p>

                  <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
                    {war.description}
                  </p>

                  <div className="flex items-center gap-4 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Status: {war.status || 'Active Reconstruction'}</span>
                    </div>
                  </div>
                </div>

                {/* Tactical Corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/30 group-hover:border-accent transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/30 group-hover:border-accent transition-colors"></div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Visual Depth Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
    </div>
  );
};

export default Archive;
