import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Lightbulb, 
  Building2, 
  Trophy, 
  Users2, 
  ArrowUpRight 
} from 'lucide-react';

const ActivityCard = ({ icon: Icon, title, description }) => (
  <div className="group relative p-5 bg-white rounded-[1.8rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#004d26]/20 transition-all duration-500 overflow-hidden">
    {/* Subtle Glow */}
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-green-50 rounded-full blur-2xl group-hover:bg-green-100 transition-colors duration-500"></div>
    
    <div className="relative z-10">
      {/* Icon with Deep Green Theme */}
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#004d26] group-hover:bg-[#004d26] group-hover:text-white transition-all duration-500 mb-4 shadow-inner">
        <Icon size={24} />
      </div>

      <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-[#004d26] transition-colors">
        {title}
      </h3>
      
      <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
        {description}
      </p>

      {/* Mini Link */}
      <div className="flex items-center gap-1 text-[10px] font-black text-slate-400 group-hover:text-[#004d26] transition-colors">
        LEARN MORE <ArrowUpRight size={12} />
      </div>
    </div>

    {/* Bottom Accent Line */}
    <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-50 overflow-hidden">
      <div className="h-full bg-[#004d26] w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
    </div>
  </div>
);

export default function Activities() {
  const activities = [
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Tailored sessions on resume building, interview hacks, and job search strategies."
    },
    {
      icon: GraduationCap,
      title: "Higher Study Guidance",
      description: "Comprehensive workshops for scholarships and higher education opportunities abroad."
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Practical workshops on public speaking, digital literacy, and leadership skills."
    },
    {
      icon: Building2,
      title: "Industry Engagement",
      description: "Bridging the gap between students and the corporate world through industrial visits."
    },
    {
      icon: Trophy,
      title: "Flagship Events",
      description: "Grand seminars and career fairs featuring industry leaders and experts."
    },
    {
      icon: Users2,
      title: "Campus Collaboration",
      description: "Joint initiatives with other clubs and organizations to foster community growth."
    }
  ];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#004d26] text-[9px] font-black tracking-widest uppercase mb-4 border border-green-100">
            What We Do
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Activities of <span className="text-[#004d26]">BUCC</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto font-medium text-sm leading-relaxed">
            Empowering students of Barishal University through professional excellence and community engagement.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item, index) => (
            <ActivityCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}