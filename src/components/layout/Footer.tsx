import { Shield, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-gold" size={32} />
            <span className="font-cinzel text-2xl font-black tracking-tighter text-white">ANU <span className="text-gold">HISTORY</span></span>
          </div>
          <p className="text-white/50 max-w-sm font-light leading-relaxed">
            Uncovering the echoes of empires. A forbidden historical archive built for the future. Every ghost tells a story.
          </p>
        </div>

        <div>
          <h4 className="font-cinzel text-gold mb-6 tracking-widest text-sm">ARCHIVE MAP</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/40">
            <li><Link to="/explore" className="hover:text-white transition-colors">EXPLORE HISTORY</Link></li>
            <li><Link to="/timeline" className="hover:text-white transition-colors">TIMELINE</Link></li>
            <li><Link to="/archive" className="hover:text-white transition-colors">WAR ARCHIVE</Link></li>
            <li><Link to="/leaders" className="hover:text-white transition-colors">LEGENDARY LEADERS</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-gold mb-6 tracking-widest text-sm">CONNECT</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 glass rounded-full hover:text-gold transition-all duration-300"><Mail size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 tracking-widest font-cinzel">
        <p>© 2024 ANU HISTORY ARCHIVE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
