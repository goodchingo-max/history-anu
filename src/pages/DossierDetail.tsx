import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { archiveData } from '../constants/archiveData';
import { Shield, ChevronLeft, Sword, Map as MapIcon, Scroll, AlertTriangle } from 'lucide-react';
import GlobeScene from '../components/three/GlobeScene';

const DossierDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entity = archiveData.find(item => item.id === id);

  if (!entity) {
    return (
      <div className="h-screen flex items-center justify-center text-gold font-cinzel text-2xl">
        DOSSIER NOT FOUND IN ARCHIVE
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <GlobeScene />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/30 hover:text-gold transition-colors font-cinzel text-xs tracking-widest mb-12 group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO ARCHIVE
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square glass-gold border border-gold/20 flex flex-col items-center justify-center p-12 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gold/5 animate-pulse"></div>
              <Shield size={120} className="text-gold opacity-20 mb-8" />
              <div className="text-center">
                <p className="font-mono text-[10px] text-gold tracking-[0.5em] mb-2 uppercase">Subject ID</p>
                <h2 className="font-cinzel text-xl font-bold text-white uppercase">{entity.id.replace('-', '_')}</h2>
              </div>

              {/* Corner markings */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-gold/40"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gold/40"></div>
            </motion.div>

            <div className="space-y-4">
              <div className="p-4 glass border border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Temporal Range:</span>
                <span className="text-[10px] font-sans text-gold font-bold">{entity.year}</span>
              </div>
              <div className="p-4 glass border border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Category:</span>
                <span className="text-[10px] font-sans text-white/70 uppercase tracking-widest">{entity.category}</span>
              </div>
              {entity.trait && (
                <div className="p-4 glass border border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Key Trait:</span>
                  <span className="text-[10px] font-sans text-accent font-bold uppercase tracking-tighter">{entity.trait}</span>
                </div>
              )}
            </div>

            <div className="p-6 glass border border-accent/20 bg-accent/5">
              <div className="flex items-center gap-2 mb-4 text-accent">
                <AlertTriangle size={16} />
                <span className="font-mono text-[10px] font-bold tracking-widest">CLASSIFIED_STATUS</span>
              </div>
              <p className="text-[10px] text-white/50 leading-relaxed uppercase tracking-tighter">
                Access to this dossier is restricted to Level 4 Archive Officers only. Any unauthorized duplication will result in immediate termination of neural link.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="font-mono text-[10px] text-gold tracking-[0.8em] mb-4 block uppercase font-bold">Historical Dossier // {entity.category}</span>
              <h1 className="font-cinzel text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase leading-none">
                {entity.name}
              </h1>
              {entity.title && <p className="font-cinzel text-2xl text-gold italic mb-8">{entity.title}</p>}
              <div className="h-[1px] w-full bg-gradient-to-r from-gold/50 via-gold/10 to-transparent mb-8"></div>
              <p className="text-xl text-white/80 font-light leading-relaxed mb-12 italic border-l-2 border-gold/30 pl-8">
                "{entity.description}"
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-6">
                 <div className="flex items-center gap-3 text-gold">
                   <Scroll size={20} />
                   <h3 className="font-cinzel text-sm font-bold tracking-widest uppercase">Archive Log</h3>
                 </div>
                 <p className="text-white/50 leading-relaxed font-light">
                   {entity.details}
                 </p>
               </div>

               <div className="space-y-6">
                 <div className="flex items-center gap-3 text-gold">
                   <MapIcon size={20} />
                   <h3 className="font-cinzel text-sm font-bold tracking-widest uppercase">Geopolitical Impact</h3>
                 </div>
                 <p className="text-white/50 leading-relaxed font-light">
                   The legacy of {entity.name} continues to echo through the modern age. Neural reconstructions suggest a 98.4% influence on subsequent regional stability.
                 </p>
               </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex gap-8">
              <button className="px-8 py-3 bg-gold text-black font-cinzel font-bold text-xs tracking-[0.3em] hover:bg-white transition-all flex items-center gap-4">
                DECRYPT FULL LOGS <Sword size={16} />
              </button>
              <button className="px-8 py-3 glass border border-white/10 text-white font-cinzel font-bold text-xs tracking-[0.3em] hover:border-gold transition-all">
                VIEW MAP DATA
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="mt-32 border-t border-white/5 pt-8 text-center">
        <p className="font-mono text-[8px] text-white/10 uppercase tracking-[1em]">END_OF_DOSSIER // ANU_HISTORY_PROJECT</p>
      </div>
    </div>
  );
};

export default DossierDetail;
