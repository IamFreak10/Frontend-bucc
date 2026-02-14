import Carousel from './Carousel/ AutoCinematicCarousel';
import React from 'react';
import Welcome from './Welcome/Welcome';
import Faq from './FAQ/Faq';
import ExtraordinaryEvents from './ExtraordinaryEvents/ExtraordinaryEvents';
import MessageRevealSection from './MessageRevealSection/MessageRevealSection';
import ContactMap from './Map/ContactMap';

export default function Home() {
  return (
    <>
      <Carousel />

      {/* Welcome ebong Faq er jonno common background wrapper */}
      <div className="">
        <Welcome />
        <Faq />
      </div>
      <div className="relative isolate overflow-hidden">
        {/* Actual Background Layer */}
        <div
          className="absolute inset-0 -z-10 bg-[url('/five.webp')] bg-fixed bg-cover bg-center opacity-30"
          aria-hidden="true"
        ></div>

        {/* Overlay for better readability (Optional) */}
        <div className="absolute inset-0 -z-10 bg-gray-900/10"></div>

        {/* The Component */}
        <div className="relative z-10">
          <ExtraordinaryEvents />
        </div>
        <MessageRevealSection />
      </div>

      <ContactMap />
    </>
  );
}
