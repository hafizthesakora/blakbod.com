import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ServiceSection.css';

function ServiceSection() {
  return (
    <div className="ser-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1> SERVICES </h1>
      {/* <p>What are you waiting for?</p> */}
      <div className="ser-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default ServiceSection;
