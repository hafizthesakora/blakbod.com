import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ContactSection.css';

function ContactSection() {
  return (
    <div className="cont-container">
      <h1> CONTACT US </h1>

      <div className="ser-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default ContactSection;
