'use client';

import { Bell, FileText, ArrowRight, Sparkles } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { useMemo } from 'react';
import { Link } from 'react-router';

export default function NoticeHeadlineTicker({ notices = [] }) {
  const latestNotices = useMemo(() => {
    if (!notices?.length) return [];
    return [...notices].reverse(); // Latest notices gulo agey dekhabe
  }, [notices]);

  if (!latestNotices.length) return null;

  return (
    <div className="w-full bg-[#004d26] py-1">
      <div className="max-w-[1440px] mx-auto px-2 md:px-4">
        <div className="relative flex items-center bg-[#022c16] rounded-2xl md:rounded-full h-11 md:h-14 overflow-hidden border border-white/5 shadow-2xl">
          
          {/* 1. BRANDED BADGE (Static Left) */}
          <div className="relative z-20 flex items-center h-full px-4 md:px-8 bg-gradient-to-r from-[#ff8c00] to-[#e67e00] text-[#004d26] font-black group">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative">
                <Bell size={18} className="animate-ring" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              </div>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] hidden sm:block">Updates</span>
              <span className="sm:hidden text-[10px] font-black uppercase tracking-widest">New</span>
            </div>
            {/* Cut-out effect */}
            <div className="absolute top-0 -right-4 h-full w-8 bg-[#ff8c00] [clip-path:polygon(0_0,0%_100%,100%_50%)]"></div>
          </div>

          {/* 2. TICKER CONTENT */}
          <div className="flex-1 flex items-center overflow-hidden pr-4 md:pr-0">
            <Marquee gradient={false} speed={60} pauseOnHover className="flex items-center">
              {latestNotices.map((notice) => (
                <Link
                  key={notice._id}
                  to={`/notices/${notice._id}`}
                  className="flex items-center gap-3 group mx-6 md:mx-10"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#ff8c00]/20 group-hover:border-[#ff8c00]/40 transition-all duration-300">
                    <Sparkles size={12} className="text-[#ff8c00]" />
                  </span>
                  <p className="text-sm md:text-base font-medium text-white/90 group-hover:text-[#ff8c00] transition-all duration-300">
                    {notice.title}
                  </p>
                  <span className="h-1 w-1 rounded-full bg-white/20 mx-2"></span>
                </Link>
              ))}
            </Marquee>
          </div>

          {/* 3. CTA BUTTON (Responsive) */}
          <Link 
            to="/notices" 
            className="hidden lg:flex items-center gap-2 px-8 h-full bg-white/5 hover:bg-white/10 text-white transition-all border-l border-white/5 group"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">Browse All</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes ring {
          0% { transform: rotate(0); }
          10% { transform: rotate(15deg); }
          20% { transform: rotate(-15deg); }
          30% { transform: rotate(10deg); }
          40% { transform: rotate(-10deg); }
          50% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }
        .animate-ring {
          animation: ring 3s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
    </div>
  );
}