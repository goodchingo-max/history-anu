import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'EXPLORE', path: '/explore' },
    { name: 'TIMELINE', path: '/timeline' },
    { name: 'WAR ARCHIVE', path: '/archive' },
    { name: 'LEADERS', path: '/leaders' },
    { name: 'GLOBE', path: '/globe' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/10">
      <Link to="/" className="flex items-center gap-2 group">
        <Shield className="text-gold group-hover:text-accent transition-colors duration-300" size={28} />
        <span className="font-cinzel text-xl font-black tracking-tighter text-white">ANU <span className="text-gold">HISTORY</span></span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="font-cinzel text-sm tracking-widest hover:text-gold transition-colors duration-300 relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl flex flex-col items-center py-10 gap-6 md:hidden border-b border-white/10"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="font-cinzel text-lg tracking-widest hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
