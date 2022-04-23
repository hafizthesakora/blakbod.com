import React from 'react';
import '../../App.css';
import ContactSection from '../ContactSection';
import ContactUsPage from '../ContactUsPage';
import Footer from '../Footer';

function Contact() {
  return (
    <>
      <ContactSection id="start" />
      <ContactUsPage />
      <Footer />
    </>
  );
}

export default Contact;
