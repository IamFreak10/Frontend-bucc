import { Bell, FileText, ChevronRight } from "lucide-react";
import { useMemo } from "react";



export default function NoticeHeadlineBar({ notices }) {
  const latestNotices = useMemo(() => {
    const THREE_DAYS = 3 * 24 * 60 * 60 * 1000;
    const now = Date.now();

    return notices.filter(
      (n) => now - new Date(n.createdAt).getTime() <= THREE_DAYS
    );
  }, [notices]);

  if (!latestNotices.length) return null;

  return (
    <div className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
        {/* Left */}
        <div className="flex items-center gap-2 font-semibold shrink-0">
          <Bell size={18} />
          <span className="hidden sm:inline">Latest</span>
        </div>

        {/* Headlines */}
        <div className="flex-1 overflow-hidden">
          <ul className="flex gap-6 whitespace-nowrap overflow-x-auto">
            {latestNotices.map((notice) => (
              <li
                key={notice._id}
                className="flex items-center gap-2 text-sm md:text-base hover:underline cursor-pointer"
              >
                <FileText size={16} />
                <span className="truncate max-w-[220px] sm:max-w-[420px]">
                  {notice.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <a
          href="/notices"
          className="flex items-center gap-1 text-sm font-medium hover:underline shrink-0"
        >
          View all
          <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}
