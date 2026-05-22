import { useLocation, Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { useLenis } from './hooks/useLenis';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/common/PageTransition';

// Lazy load pages
const Landing = lazy(() => import('./pages/Landing'));
const Explore = lazy(() => import('./pages/Explore'));
const TimelinePage = lazy(() => import('./pages/TimelinePage'));
const Archive = lazy(() => import('./pages/Archive'));
const LeadersPage = lazy(() => import('./pages/LeadersPage'));
const GlobePage = lazy(() => import('./pages/GlobePage'));
const About = lazy(() => import('./pages/About'));
const DossierDetail = lazy(() => import('./pages/DossierDetail'));

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
        <Route path="/explore" element={<PageTransition><Explore /></PageTransition>} />
        <Route path="/timeline" element={<PageTransition><TimelinePage /></PageTransition>} />
        <Route path="/archive" element={<PageTransition><Archive /></PageTransition>} />
        <Route path="/leaders" element={<PageTransition><LeadersPage /></PageTransition>} />
        <Route path="/globe" element={<PageTransition><GlobePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/dossier/:id" element={<PageTransition><DossierDetail /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useLenis();

  return (
    <div className="bg-black min-h-screen selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-screen w-screen bg-black flex items-center justify-center text-gold font-cinzel text-2xl animate-pulse tracking-[0.3em]">INITIATING ARCHIVE...</div>}>
          <AppRoutes />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
