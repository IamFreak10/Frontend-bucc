import React from 'react';
import { Lightbulb, Users } from 'lucide-react';
import Advisor from './Advisor'; // Tumar Advisor card file ta eikhane thakbe

export default function AdvisorsSection() {
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
    /* Section py-12 korlam jate upore-niche jayga kom khay */
    <section className="bg-slate-50 py-12 px-4 overflow-visible">
      
      {/* Container max-w-5xl korlam jate card gulo ektu kachakachi thake */}
      <div className="max-w-5xl mx-auto">
        
        {/* Compact Header Area */}
        <div className="relative mb-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="z-10">
            {/* Badge - Smaller ratio */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 text-[#004d26] text-[8px] font-black tracking-[0.15em] uppercase mb-2 border border-green-100 shadow-sm">
              <Lightbulb size={10} className="animate-pulse" /> Expert Guidance
            </div>
            
            {/* Title - Reduced from 5xl to 3xl/4xl */}
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004d26] to-green-600">Advisors</span>
            </h2>
            
            <p className="text-slate-500 mt-2 max-w-sm font-medium text-sm leading-relaxed">
              The visionary faculty members and alumni shaping the future of {data.organization}.
            </p>
          </div>

          {/* Compact Stats Box - Proportional Scale Down */}
          <div className="flex items-center gap-3 bg-white p-3 px-4 rounded-[1.2rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="text-right">
              <p className="text-2xl font-black text-[#004d26] leading-none">
                {data.members.length}
              </p>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter mt-1">
                Total Advisors
              </p>
            </div>
            <div className="w-9 h-9 bg-gradient-to-br from-[#004d26] to-green-600 rounded-lg flex items-center justify-center text-white shadow-md">
              <Users size={18} />
            </div>
          </div>
        </div>

        {/* Tight Grid Container - gap-y kora hoyeche 10/12 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
          {data.members.map((member, index) => (
            <div
              key={index}
              className="flex justify-center"
              style={{
                /* Animation delay ektu komiyechi fast feel er jonno */
                animation: `fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.08}s both`,
              }}
            >
              <Advisor member={member} />
            </div>
          ))}
        </div>
      </div>

      {/* Modern Subdued Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.98); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
      `,
        }}
      />
    </section>
  );
}