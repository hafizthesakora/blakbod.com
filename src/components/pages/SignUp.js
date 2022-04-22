import React from 'react';
import '../../App.css';
import AutoPlay from '../Carousel';
import Description from '../Description';
import Footer from '../Footer';
import Form from '../Form';
// import SignSection from '../SignSection';

export default function SignUp() {
  return (
    <>
      <AutoPlay />
      <Description bootcamp />
      <Form />

      <Footer />
    </>
  );
}
