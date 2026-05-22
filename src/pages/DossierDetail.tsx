import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { archiveData } from '../constants/archiveData';
import { Shield, ChevronLeft, Sword, Map as MapIcon, Scroll, AlertTriangle, Target, Users, Zap } from 'lucide-react';
import GlobeScene from '../components/three/GlobeScene';

const DossierDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const entity = archiveData.find(item => item.id === id);

  if (!entity) {
    return (
      <div className="h-screen flex items-center justify-center text-gold font-cinzel text-2xl animate-pulse">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/30 hover:text-gold transition-colors font-cinzel text-xs tracking-widest mb-12 group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO ARCHIVE
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar - Tactical Specs */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square glass-gold border border-gold/20 flex flex-col items-center justify-center p-8 relative overflow-hidden group shadow-[0_0_30px_rgba(212,175,55,0.1)]"
            >
              <div className="absolute inset-0 bg-gold/5 animate-pulse"></div>
              <Shield size={100} className="text-gold opacity-20 mb-8" />
              <div className="text-center">
                <p className="font-mono text-[8px] text-gold tracking-[0.5em] mb-2 uppercase">Neural Signature</p>
                <h2 className="font-cinzel text-xl font-bold text-white uppercase tracking-tighter">{entity.id.replace('-', '_')}</h2>
              </div>
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-gold/40"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gold/40"></div>
            </motion.div>

            <div className="space-y-4">
              <div className="p-4 glass border border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Active Era:</span>
                <span className="text-[10px] font-sans text-gold font-bold">{entity.year}</span>
              </div>
              {entity.trait && (
                <div className="p-4 glass border border-accent/20 flex justify-between items-center bg-accent/5">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Primary Trait:</span>
                  <span className="text-[10px] font-sans text-white font-bold uppercase">{entity.trait}</span>
                </div>
              )}
            </div>

            {/* Enemies & Allies */}
            {entity.dossier && (
              <div className="space-y-4 pt-8">
                <div className="glass p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-4 text-accent">
                    <Target size={16} />
                    <span className="font-mono text-[10px] tracking-widest uppercase">Target Enemies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {entity.dossier.enemies.map(enemy => (
                      <span key={enemy} className="text-[9px] px-2 py-1 glass-gold border border-gold/10 text-white/60 font-cinzel">{enemy}</span>
                    ))}
                  </div>
                </div>
                <div className="glass p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-4 text-gold">
                    <Users size={16} />
                    <span className="font-mono text-[10px] tracking-widest uppercase">Known Allies</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {entity.dossier.allies.map(ally => (
                      <span key={ally} className="text-[9px] px-2 py-1 glass border border-white/10 text-white/60 font-cinzel">{ally}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Dossier Content */}
          <div className="lg:col-span-3 space-y-16">
            <section>
              <span className="font-mono text-[10px] text-gold tracking-[0.8em] mb-4 block uppercase font-bold">Classified intelligence dossier</span>
              <h1 className="font-cinzel text-6xl md:text-9xl font-black text-white mb-4 tracking-tighter uppercase leading-none italic">
                {entity.name}
              </h1>
              {entity.title && <p className="font-cinzel text-3xl text-gold/70 italic mb-10 tracking-widest">{entity.title}</p>}

              <div className="relative p-10 glass border-l-4 border-gold bg-gold/[0.02]">
                <p className="text-2xl text-white/90 font-light leading-relaxed italic">
                  "{entity.description}"
                </p>
                <div className="absolute top-4 right-4 opacity-10">
                   <Scroll size={64} />
                </div>
              </div>
            </section>

            {entity.dossier && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                     <h3 className="font-cinzel text-xl font-bold text-gold tracking-widest uppercase border-b border-gold/20 pb-4">The Ascent</h3>
                     <p className="text-white/50 leading-relaxed font-light">{entity.dossier.rise}</p>
                   </div>
                   <div className="space-y-6">
                     <h3 className="font-cinzel text-xl font-bold text-accent tracking-widest uppercase border-b border-accent/20 pb-4">The Collapse</h3>
                     <p className="text-white/50 leading-relaxed font-light">{entity.dossier.fall}</p>
                   </div>
                </div>

                <section className="space-y-8">
                  <div className="flex items-center gap-4">
                    <Zap size={20} className="text-gold" />
                    <h3 className="font-cinzel text-2xl font-bold tracking-[0.2em]">STRATEGIC CAMPAIGNS</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {entity.dossier.campaigns.map((camp, i) => (
                      <div key={i} className="p-6 glass-gold border border-gold/10 group hover:border-gold/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <span className="font-mono text-[10px] text-gold/40">{camp.year}</span>
                          <span className="text-[10px] font-mono text-accent uppercase tracking-tighter">{camp.outcome}</span>
                        </div>
                        <h4 className="font-cinzel text-xl font-bold text-white group-hover:text-gold transition-colors">{camp.name}</h4>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-8">
                  <h3 className="font-cinzel text-2xl font-bold tracking-[0.2em]">RECORDED MANTRAS</h3>
                  <div className="space-y-6">
                    {entity.dossier.quotes.map((quote, i) => (
                      <p key={i} className="text-4xl md:text-5xl font-cinzel font-black text-white/10 hover:text-white/40 transition-colors duration-500 cursor-default">
                        {quote}
                      </p>
                    ))}
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DossierDetail;
