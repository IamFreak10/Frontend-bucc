import { Lightbulb, Users } from "lucide-react";
import Advisor from "./Advisor"; // Advisor card component ta import koro

export default function Advisors() {
  const data = {
    organization: "BUCC",
    members: [
      {
        name: "Dr. Md. Shakhawat Hossain",
        designation: "Associate Professor",
        department: "Department of Management Studies",
        role: "Moderator, BUCC",
        type: "Faculty",
        image: "/Advisors/dr-shawkat.jpeg"
      },
      {
        name: "Dr. Probir Kumar Bhowmik",
        designation: "Associate Professor",
        department: "Department of Accounting & Information Systems",
        type: "Faculty",
        image: "/Advisors/dr-probir-kumar.jpeg"
      },
      {
        name: "Abdul Alim Baser",
        designation: "Associate Professor",
        department: "Department of Accounting and Information Systems",
        type: "Faculty",
        image: "/Advisors/abdul-alim.jpeg"
      },
      {
        name: "Dr. Dhiman Kumer Roy",
        designation: "Associate Professor",
        department: "Department of Geology and Mining",
        type: "Faculty",
        image: "/Advisors/dr-dhiman-kumar.jpeg"
      },
      {
        name: "Dr. Subroto Kumar Das",
        designation: "Associate Professor",
        department: "Department of Botany",
        type: "Faculty",
        image: "/Advisors/dr-subrato.jpeg"
      },
      {
        name: "Tandra Mondal",
        designation: "Associate Professor",
        department: "Department of Finance and Banking",
        type: "Faculty",
        image: "/Advisors/tandra-mondal.jpeg"
      },
      {
        name: "Dilafroze Khanam",
        designation: "Associate Professor",
        department: "Department of Sociology",
        type: "Faculty",
        image: "/Advisors/dilafroze.jpeg"
      },
      {
        name: "Dr. Tareq Mahamud Abir",
        designation: "Associate Professor",
        department: "Department of Sociology",
        type: "Faculty",
        image: "/Advisors/dr-tareq.jpeg"
      },
      {
        name: "Pragga Paromita Bose",
        designation: "Assistant Professor",
        department: "Department of English",
        type: "Faculty",
        image: "/Advisors/praga-pramati.jpeg"
      },
      {
        name: "Supravat Halder",
        designation: "Associate Professor",
        department: "Department of Law",
        type: "Alumni",
        affiliation: "BUCC Alumni",
        image: "/Advisors/dr-subrato.jpeg"
      }
    ],
  };

  return (
    <section className="bg-slate-50 py-24 px-6 overflow-visible">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="relative mb-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-[#004d26] text-[10px] font-black tracking-widest uppercase mb-4 shadow-sm border border-blue-200">
              <Lightbulb size={14} className="animate-pulse" /> Expert Guidance
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004d26] to-green-600">Advisors</span>
            </h2>
            <p className="text-slate-500 mt-6 max-w-xl font-medium text-lg">
              The visionary faculty members and alumni shaping the future of {data.organization}.
            </p>
          </div>

          {/* Stats Box */}
          <div className="hidden lg:flex items-center gap-4 bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-right">
              <p className="text-4xl font-black text-[#004d26] leading-none">{data.members.length}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total Advisors</p>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-[#004d26] to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Users size={28} />
            </div>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {data.members.map((member, index) => (
            <div 
              key={index} 
              className="flex justify-center"
              style={{ 
                animation: `fadeInUp 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.15}s both` 
              }}
            >
              <Advisor member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Modern Animation Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
      `}} />
    </section>
  );
}