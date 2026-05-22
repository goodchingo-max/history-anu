import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(20px)' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <Shield className="text-gold mb-8 animate-pulse" size={64} />
        <h1 className="font-cinzel text-3xl md:text-5xl font-black tracking-[0.5em] text-white mb-2">
          ANU <span className="text-gold">HISTORY</span>
        </h1>
        <p className="font-cinzel text-[10px] tracking-[0.8em] text-white/30 uppercase mb-12">
          Decrypting Forbidden Archives
        </p>

        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gold"
            initial={{ x: '-100%' }}
            animate={{ x: `${progress - 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
