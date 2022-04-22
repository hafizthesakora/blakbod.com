import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import SignSection from '../SignSection';
import Description from '../Description';
import Hakk from '../Hakk';
import Testimonies from '../Testimonies';

function AboutUs() {
  return (
    <>
      <SignSection />
      <Description />
      <Hakk />
      <Testimonies />
      <Footer />
    </>
  );
}

export default AboutUs;
