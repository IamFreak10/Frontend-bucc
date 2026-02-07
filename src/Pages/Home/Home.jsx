import Carousel from './Carousel/ AutoCinematicCarousel';
import React from 'react';
import Welcome from './Welcome/Welcome';
import Faq from './FAQ/Faq';

export default function Home() {
  return (
    <>
      <Carousel />
      <Welcome />
      <Faq />
    </>
  );
}
