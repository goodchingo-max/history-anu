import Hero from '../components/sections/Hero';
import Timeline from '../components/sections/Timeline';
import WarMap from '../components/sections/WarMap';
import Leaders from '../components/sections/Leaders';
import Quote from '../components/sections/Quote';
import Gallery from '../components/sections/Gallery';
import GlobeScene from '../components/three/GlobeScene';
import LoadingScreen from '../components/common/LoadingScreen';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const Landing = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loadingComplete && (
          <LoadingScreen onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {/* 3D Scene rendered in background during loading for GPU warm-up */}
      <GlobeScene />

      {loadingComplete && (
        <>
          <Hero />
          <Timeline />
          <WarMap />
          <Leaders />
          <Quote />
          <Gallery />
        </>
      )}
    </>
  );
};

export default Landing;
