import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SignSection.css';

function SignSection() {
  return (
    <div className="sign-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1> OUR COMPANY </h1>
      {/* <p>What are you waiting for?</p> */}
      <div className="sign-btns">
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

export default SignSection;
