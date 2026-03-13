import { 
  UserCircle, 
  GraduationCap, 
  Award, 
  School, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";

const Advisor = ({ member }) => {
  const isFaculty = member.type === 'Faculty';

  return (
    /* 1. Overall Size: Max-width 380 theke 310 e anchi. mt-20 theke mt-12. */
    <div className="group relative w-full max-w-[310px] bg-white rounded-[1.8rem] p-5 pt-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(0,77,38,0.12)] transition-all duration-500 border border-slate-100 hover:border-[#004d26]/20 mt-12 mb-4">
      
      {/* 2. Background Glow - Scaled Down */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-green-50/40 rounded-full blur-2xl group-hover:bg-green-100/50 transition-colors duration-500 overflow-hidden"></div>
      
      {/* 3. Floating Image - Scaled from w-32 to w-24, -top-16 to -top-10 */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30">
        <div className="relative w-24 h-24 rounded-full p-1 bg-white shadow-xl group-hover:scale-105 transition-all duration-500">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=eff6ff&color=004d26`; }}
              />
            ) : (
              <UserCircle size={48} strokeWidth={1} className="text-slate-300" />
            )}
          </div>
          {/* Verified Badge - Scaled Down */}
          <div className="absolute bottom-1 right-1 p-1 bg-white rounded-full shadow-md border border-slate-50">
             <ShieldCheck size={16} className="text-green-700 fill-green-50" />
          </div>
        </div>
      </div>

      {/* 4. Badge & Icon Area - Tightened Spacing */}
      <div className="relative z-10 flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-[8px] font-black tracking-widest uppercase shadow-sm ${
          isFaculty ? 'bg-[#004d26] text-white' : 'bg-slate-900 text-white'
        }`}>
          {member.type}
        </span>
        <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-[#004d26] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-inner">
          {isFaculty ? <GraduationCap size={18} /> : <Award size={18} />}
        </div>
      </div>

      {/* 5. Content - Text sizes reduced proportionally */}
      <div className="relative z-10 mb-4 text-center">
        <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-[#004d26] transition-colors min-h-[2.8rem] flex items-center justify-center px-1">
          {member.name}
        </h3>
        {member.role && (
          <div className="inline-flex items-center gap-1 mt-1 px-3 py-1 bg-green-50 text-[#004d26] rounded-lg text-[9px] font-bold uppercase tracking-wider border border-green-100 shadow-sm">
            <Award size={12} className="animate-pulse" /> {member.role}
          </div>
        )}
      </div>

      {/* 6. Details Section - Reduced padding and icon sizes */}
      <div className="relative z-10 space-y-3 py-4 border-t border-slate-50">
        <div className="flex items-start gap-2">
          <School size={16} className="text-[#004d26] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 font-semibold leading-snug text-left italic">
            {member.department}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-700 group-hover:scale-[2] transition-transform duration-300"></div>
          <p className="text-[9px] text-slate-400 font-black uppercase tracking-wider">
            {member.designation}
          </p>
        </div>
      </div>

      {/* 7. Footer - Compact */}
      <div className="relative z-10 flex items-center justify-end">
        <button className="flex items-center gap-1 text-[9px] font-black text-slate-400 hover:text-[#004d26] transition-all group/btn tracking-tighter">
          PROFILE 
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* 8. Bottom Line - Thinner */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-50 rounded-b-[1.8rem] overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#004d26] via-[#10b981] to-[#004d26] w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Advisor;