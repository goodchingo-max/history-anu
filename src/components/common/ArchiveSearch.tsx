import { useState, useEffect } from 'react';
import { Search, Filter, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { archiveData, HistoricalEntity } from '../../constants/archiveData';
import { Link } from 'react-router-dom';

const ArchiveSearch = () => {
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
                           item.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || item.category === category;
      return matchesQuery && matchesCategory;
    });

    setResults(filtered);
  }, [query, category]);

  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <div className="relative group">
        <div className="absolute inset-0 bg-gold/5 blur-xl group-hover:bg-gold/10 transition-all duration-500"></div>
        <div className="relative glass border border-white/10 p-2 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-4 flex-1 w-full px-4">
            <Search className="text-gold" size={20} />
            <input
              type="text"
              placeholder="SEARCH THE FORBIDDEN ARCHIVE..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-white font-cinzel text-sm w-full tracking-widest placeholder:text-white/20"
            />
          </div>

          <div className="flex items-center gap-2 border-l border-white/10 pl-4 h-full">
            <Filter className="text-white/40" size={16} />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent text-white font-cinzel text-[10px] tracking-widest outline-none cursor-pointer uppercase"
            >
              <option value="all" className="bg-black">ALL CATEGORIES</option>
              <option value="leader" className="bg-black">LEADERS</option>
              <option value="war" className="bg-black">WARS</option>
              <option value="empire" className="bg-black">EMPIRES</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <AnimatePresence>
          {results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {results.map((item) => (
                <Link to={`/dossier/${item.id}`} key={item.id}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="p-6 glass-gold border border-gold/10 flex justify-between items-center group cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] text-gold/50 font-mono block mb-1 uppercase tracking-tighter">
                        {item.category} // {item.year}
                      </span>
                      <h3 className="font-cinzel text-lg font-bold text-white uppercase group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <ArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" size={20} />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {query && results.length === 0 && (
          <p className="text-center font-cinzel text-white/20 text-xs tracking-[0.5em] py-12">
            NO FRAGMENTS FOUND IN THIS TEMPORAL VECTOR
          </p>
        )}
      </div>
    </div>
  );
};

export default ArchiveSearch;
