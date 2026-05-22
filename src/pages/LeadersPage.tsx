import Leaders from '../components/sections/Leaders';
import { motion } from 'framer-motion';

const LeadersPage = () => {
  return (
    <div className="pt-32 min-h-screen">
      <div className="px-6 max-w-7xl mx-auto mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-cinzel text-5xl md:text-7xl font-bold mb-6"
        >
          LEGENDARY <span className="text-gold">LEADERS</span>
        </motion.h1>
        <p className="text-white/50 max-w-2xl mx-auto font-light">
          The individuals who shaped the world through ambition, vision, and steel. Access their detailed psychological and tactical profiles.
        </p>
      </div>
      <Leaders />
    </div>
  );
};

export default LeadersPage;
