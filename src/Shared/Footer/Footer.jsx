import React from 'react';
import { 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#004d26] rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-900/20">
                <span className="font-black text-xl">B</span>
              </div>
              <h2 className="text-xl font-black text-white tracking-tighter">BUCC</h2>
            </div>
            <p className="text-sm leading-relaxed font-medium">
              Empowering the students of Barishal University to bridge the gap between academia and the professional world.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-[#004d26] hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 flex items-center gap-2 text-sm uppercase tracking-widest">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'About Us', 'Advisors', 'Activities', 'Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#004d26] flex items-center gap-1 group transition-colors">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-5 flex items-center gap-2 text-sm uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#004d26] shrink-0" />
                <span>Ground Floor, Academic Building 2, University of Barishal</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#004d26] shrink-0" />
                <a href="mailto:bucc@bu.ac.bd" className="hover:underline">bucc@bu.ac.bd</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#004d26] shrink-0" />
                <span>+880 1XXX-XXXXXX</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Action */}
          <div className="relative">
             <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#004d26]/10 rounded-full blur-2xl"></div>
             <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-widest relative z-10">
              Join Our Community
            </h3>
            <p className="text-xs mb-4 leading-relaxed relative z-10 font-medium">
              Stay updated with our latest workshops and career news.
            </p>
            <div className="flex flex-col gap-2 relative z-10">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-slate-800 border-none rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-[#004d26] outline-none transition-all"
              />
              <button className="bg-[#004d26] hover:bg-green-700 text-white font-black text-[10px] uppercase tracking-widest py-2.5 rounded-xl transition-all shadow-lg shadow-green-900/20">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © {currentYear} Barishal University Career Club. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <div className="flex items-center gap-1 text-[#004d26]">
              <ShieldCheck size={14} /> Official Club
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}