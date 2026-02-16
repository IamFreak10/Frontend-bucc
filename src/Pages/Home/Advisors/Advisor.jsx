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
    /* mt-20 korechi jate boro chobir jonno upore jayga thake */
    <div className="group relative w-full max-w-[380px] bg-white rounded-[2.5rem] p-6 pt-20 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,77,38,0.15)] transition-all duration-500 border border-slate-100 hover:border-[#004d26]/30 mt-20 mb-6">
      
      {/* 1. Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-50/50 rounded-full blur-3xl group-hover:bg-green-100/60 transition-colors duration-500 overflow-hidden"></div>
      
      {/* 2. BIGGER Floating Image (w-32) */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-30">
        <div className="relative w-32 h-32 rounded-full p-1.5 bg-white shadow-2xl group-hover:scale-105 transition-all duration-500">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-50 border-2 border-slate-100 flex items-center justify-center">
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=eff6ff&color=004d26`; }}
              />
            ) : (
              <UserCircle size={64} strokeWidth={1} className="text-slate-300" />
            )}
          </div>
          {/* Verified Badge - Position Adjusted for Bigger Circle */}
          <div className="absolute bottom-2 right-2 p-1.5 bg-white rounded-full shadow-lg border border-slate-100">
             <ShieldCheck size={20} className="text-green-700 fill-green-50" />
          </div>
        </div>
      </div>

      {/* 3. Badge & Icon Area */}
      <div className="relative z-10 flex justify-between items-start mb-6">
        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm ${
          isFaculty ? 'bg-[#004d26] text-white' : 'bg-slate-900 text-white'
        }`}>
          {member.type}
        </span>
        <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-[#004d26] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-inner">
          {isFaculty ? <GraduationCap size={20} /> : <Award size={20} />}
        </div>
      </div>

      {/* 4. Content */}
      <div className="relative z-10 mb-6 text-center">
        <h3 className="text-2xl font-black text-slate-800 leading-tight group-hover:text-[#004d26] transition-colors min-h-[3.5rem] flex items-center justify-center px-2">
          {member.name}
        </h3>
        {member.role && (
          <div className="inline-flex items-center gap-1.5 mt-2 px-4 py-1.5 bg-green-50 text-[#004d26] rounded-xl text-[11px] font-bold uppercase tracking-wider border border-green-100 shadow-sm">
            <Award size={14} className="animate-bounce" /> {member.role}
          </div>
        )}
      </div>

      {/* 5. Details Section */}
      <div className="relative z-10 space-y-4 py-6 border-t border-slate-50">
        <div className="flex items-start gap-3">
          <School size={20} className="text-[#004d26] shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600 font-semibold leading-snug text-left italic">
            {member.department}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-700 group-hover:scale-[2] transition-transform duration-300"></div>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            {member.designation}
          </p>
        </div>
      </div>

      {/* 6. Footer */}
      <div className="relative z-10 mt-2 flex items-center justify-end">
        <button className="flex items-center gap-2 text-[11px] font-black text-slate-400 hover:text-[#004d26] transition-all group/btn tracking-tighter">
          VIEW FULL PROFILE 
          <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
        </button>
      </div>

      {/* 7. Bottom Jhakanaka Line */}
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-slate-50 rounded-b-[2.5rem] overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#004d26] via-[#10b981] to-[#004d26] w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out"></div>
      </div>
    </div>
  );
};

export default Advisor;