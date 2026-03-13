import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar, UserCheck, GraduationCap, BarChart3 } from 'lucide-react';

const StatItem = ({ icon: Icon, end, title, suffix = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2,    
  });

  return (
    <div ref={ref} className="relative group p-5 bg-white rounded-[1.5rem] border border-green-100/30 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden text-center">
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-50 rounded-full blur-2xl group-hover:bg-green-100 transition-colors duration-500"></div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="p-3 bg-slate-50 rounded-xl text-[#004d26] group-hover:bg-[#004d26] group-hover:text-white transition-all duration-500 mb-3 shadow-inner">
          <Icon size={22} />
        </div>

        <h3 className="text-3xl font-black text-slate-800 tracking-tighter mb-1">
          {inView ? <CountUp end={end} duration={2.5} separator="," suffix={suffix} /> : "0"}
        </h3>

        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">
          {title}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-50 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#004d26] via-[#10b981] to-[#004d26] w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default function StatsSection() {
  const stats = [
    { icon: GraduationCap, end: 12, title: "Faculty Advisors", suffix: "" },
    { icon: Calendar, end: 120, title: "Events Hosted", suffix: "+" },
    { icon: UserCheck, end: 45, title: "Committee Members", suffix: "" },
    { icon: Users, end: 2000, title: "General Members", suffix: "+" },
  ];

  return (
    /* Background deep green (#004d26) thakle white cards gulo "Pop" korbe */
    <section className="bg-[#004d26] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Adjusted Title Block */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-sm border border-white/10">
            <BarChart3 size={12} className="text-green-300" /> Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            The Legacy in <span className="text-green-400">Numbers</span>
          </h2>
          <div className="w-12 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}