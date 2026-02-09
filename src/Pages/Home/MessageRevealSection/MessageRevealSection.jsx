import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";

const MessageBlock = ({ title, message, name, designation, image, direction }) => {
  const isLeft = direction === "left";

  return (
    <div className="my-24 px-4 overflow-hidden">
      <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center max-w-6xl mx-auto gap-12`}>
        
        {/* Profile Image with Slide Animation */}
        <div className="w-full md:w-1/3">
          <Slide direction={direction}
          delay={100}
          triggerOnce={false}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white ring-1 ring-gray-900/5 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </Slide>
        </div>

        {/* Text Content with Fade Animation */}
        <div className={`w-full md:w-2/3 ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
          <Fade cascade damping={0.1} triggerOnce>
            <h2 className="text-4xl font-black text-[#004d26] mb-6 tracking-tight uppercase">
              {title}
            </h2>
            
            <div className="relative mb-8">
              <p className="text-xl text-[#389466] leading-relaxed font-serif italic text-pretty">
                "{message}"
              </p>
            </div>

            <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'}`}>
              <div className="h-1 w-20 bg-green-700 mb-4"></div>
              <h4 className="text-2xl font-bold text-gray-900">{name}</h4>
              <p className="text-green-700 font-semibold tracking-widest text-sm uppercase mt-1">
                {designation}
              </p>
              <p className="text-gray-400 text-xs mt-2 font-medium italic">
                Barishal University Career Club (BUCC)
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default function MessageRevealSection() {
  return (
    <div className="bg-slate-50 py-10">
      
      {/* Chief Adviser - Reveal from Left */}
      <MessageBlock 
        direction="left"
        title="Message from the Chief Adviser"
        image="/chief.jpeg" 
        name="Dr. Abdullah Al Masud"
        designation="Associate Professor, Dept. Of Management Studies"
        message="Barishal University Career Club (BUCC) plays an important role in preparing students for their professional journeys. By focusing on skill development, leadership, and career awareness, BUCC helps bridge the gap between academic knowledge and real-world application."
      />

      {/* President - Reveal from Right */}
      <MessageBlock 
        direction="right"
        title="Message of the President"
        image="/president.jpeg" 
        name="President's Name"
        designation="President, BUCC"
        message="I appreciate the dedication of the students and leaders behind BUCC and encourage them to continue their efforts with integrity, discipline, and vision. I wish BUCC continued success in shaping capable and responsible future professionals."
      />

    </div>
  );
}