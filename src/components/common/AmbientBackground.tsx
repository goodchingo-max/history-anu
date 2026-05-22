import { motion } from 'framer-motion';

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden bg-black">
      {/* Dynamic Light 1 */}
      <motion.div
        animate={{
          x: ['-20%', '20%'],
          y: ['-20%', '20%'],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-gold/10 rounded-full blur-[150px]"
      />

      {/* Dynamic Light 2 */}
      <motion.div
        animate={{
          x: ['20%', '-20%'],
          y: ['20%', '-20%'],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[80vw] h-[80vh] bg-accent/5 rounded-full blur-[150px]"
      />

      {/* Global Grain/Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }}></div>
    </div>
  );
};

export default AmbientBackground;
