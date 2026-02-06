import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Welcome() {
  return (
    <Fade delay={200} duration={1500} triggerOnce={false} cascade damping={0.1}>
      <section className="relative py-24 px-6">
        {/* soft background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50 via-white to-white" />

        <div className="max-w-4xl mx-auto ">
          {/* small badge */}
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
            Barishal University Career Club
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#004d26] leading-tight">
            Welcome to BUCC
          </h1>

          {/* accent divider */}
          <div className=" h-1 bg-[#004d26]  my-6 rounded-full" />

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Barishal University Career Club (BUCC) is a student-led community
            focused on helping students grow beyond the classroom.
            <br />
            
            We support students through career guidance, skill-building
            sessions, industry exposure, and leadership opportunities that
            prepare them for real challenges.
            <br />
            
            At BUCC, we believe talent is everywhere. Our goal is to turn that
            talent into opportunity by creating pathways for learning, growth,
            and confidence.
          </p>
        </div>
      </section>
      
    </Fade>
  );
}
