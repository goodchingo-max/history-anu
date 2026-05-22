import { useState, useEffect } from 'react';
import { Search, Filter, Shield, ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { archiveData, HistoricalEntity } from '../../constants/archiveData';
import { Link } from 'react-router-dom';

const ArchiveSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<HistoricalEntity[]>([]);
  const [category, setCategory] = useState<string>('all');

  useEffect(() => {
    if (query.trim() === '' && category === 'all') {
      setResults([]);
      return;
    }

    const filtered = archiveData.filter(item => {
      const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase()) ||
                           item.description.toLowerCase().includes(query.toLowerCase()) ||
                           item.year.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || item.category === category;
      return matchesQuery && matchesCategory;
    });

    setResults(filtered);
  }, [query, category]);

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-6">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full relative group"
        >
          <div className="absolute inset-0 bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-500"></div>
          <div className="relative glass border border-white/10 p-6 flex items-center gap-6">
             <Search className="text-gold" size={24} />
             <span className="font-cinzel text-xl tracking-[0.3em] text-white/30 uppercase">Initiate Archive Scan...</span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col p-12 md:p-24"
          >
            <button
              onClick={() => { setIsOpen(false); setQuery(''); }}
              className="absolute top-12 right-12 text-white/30 hover:text-gold transition-colors"
            >
              <X size={48} strokeWidth={1} />
            </button>

            <div className="max-w-6xl mx-auto w-full">
              <div className="mb-20">
                <p className="font-mono text-[10px] text-gold tracking-[1em] uppercase mb-4">Neural Link Active</p>
                <div className="flex flex-col md:flex-row gap-8 items-center border-b border-white/10 pb-8">
                   <div className="flex items-center gap-6 flex-1 w-full">
                     <Search className="text-gold" size={40} />
                     <input
                       autoFocus
                       type="text"
                       placeholder="SEARCH THE FORBIDDEN ARCHIVE..."
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       className="bg-transparent border-none outline-none text-white font-cinzel text-4xl md:text-6xl w-full tracking-tighter placeholder:text-white/5 uppercase"
                     />
                   </div>

                   <div className="flex items-center gap-4">
                     <Filter className="text-gold/50" size={24} />
                     <select
                       value={category}
                       onChange={(e) => setCategory(e.target.value)}
                       className="bg-transparent text-gold font-cinzel text-sm tracking-widest outline-none cursor-pointer uppercase border border-gold/20 p-2 px-4 glass"
                     >
                       <option value="all" className="bg-black">ALL DATA</option>
                       <option value="leader" className="bg-black">LEADERS</option>
                       <option value="war" className="bg-black">WARS</option>
                       <option value="empire" className="bg-black">EMPIRES</option>
                     </select>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[50vh] overflow-y-auto pr-6 custom-scrollbar">
                {results.map((item) => (
                  <Link to={`/dossier/${item.id}`} key={item.id} onClick={() => setIsOpen(false)}>
                    <motion.div
                      whileHover={{ y: -5, borderColor: 'rgba(212,175,55,0.4)' }}
                      className="p-8 glass-gold border border-gold/10 flex flex-col justify-between h-full group"
                    >
                      <div>
                        <span className="text-[10px] text-gold/50 font-mono block mb-2 uppercase tracking-widest">
                          {item.category} // {item.year}
                        </span>
                        <h3 className="font-cinzel text-2xl font-black text-white uppercase group-hover:text-gold transition-colors leading-none mb-4">
                          {item.name}
                        </h3>
                        <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <ArrowRight className="text-gold" size={24} />
                      </div>
                    </motion.div>
                  </Link>
                ))}

                {query && results.length === 0 && (
                  <div className="col-span-full py-20 text-center">
                    <p className="font-cinzel text-white/20 text-2xl tracking-[0.5em]">
                      NO TEMPORAL MATCHES FOUND
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
               <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ArchiveSearch;
