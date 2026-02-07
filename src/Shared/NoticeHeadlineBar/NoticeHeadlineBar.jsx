import { Bell, FileText, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Marquee from 'react-fast-marquee';
import { useMemo } from 'react';
import './bell.css';

export default function NoticeHeadlineTicker({ notices }) {
  const latestNotices = useMemo(() => {
    const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    return notices.filter(
      (n) => now - new Date(n.createdAt).getTime() <= THREE_DAYS
    );
  }, [notices]);

  if (!latestNotices.length) return null;

  return (
    <div className="w-full  bg-[#5D866C] text-white overflow-hidden ">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-3">
        {/* 🔔 Animated + Glowing Bell */}
        <div className="flex items-center gap-2 font-semibold shrink-0">
          <span className="bell-glow p-1">
            <Bell size={18} className="bell-ring text-yellow-300" />
          </span>
          <span className="hidden sm:inline">Latest</span>
        </div>

        {/* Headlines */}
        <div className="flex-1  max-w-5xl">
          <Marquee gradient={false} speed={45} pauseOnHover>
            {latestNotices.map((notice) => (
              <div
                key={notice._id}
                className="flex items-center   font-semibold text-sm md:text-base cursor-pointer"
              >
                <FileText className='text-orange-400' size={16} />
                <span className="truncate mr-5 text-green-950 max-w-[220px] sm:max-w-[420px]">
                  {notice.title}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Arrow */}


        {/* CTA */}
      </div>
    </div>
  );
}
// !TODO:ADD view all button
// !TODO:Link all notices