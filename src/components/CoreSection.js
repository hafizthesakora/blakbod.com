import React from 'react';
import './Description.css';

export default function MissionSection() {
  return (
    <div class="section">
      <div class="container">
        <div class="content-section">
          <div class="title">
            <h1>Our Core Values</h1>
            <div className="border"></div>
          </div>
          <div class="content">
            <h3>Stewardship and Integrity:</h3>
            <p className="align">
              Fulfilling our obligations to building better, stronger and
              sustainable company for future generations. Protecting the Blakbod
              brand, meeting our commitments to our client stakeholders, acting
              with an owner mentality, developing people and help improve
              Ghana's education and corperate sector and Africa as a whole. Also
              Being ethically prudent, honest and inspiring trust by saying what
              we mean, matching our behaviours to our words and taking
              responsibilty for our actions.
            </p>
          </div>
          <div class="content">
            <h3>Client Value Creation:</h3>
            <p className="align">
              Enabling clients to become high-performers in their business and
              creating long-term relationships by being responsive and relevant
              and by consistently delivering value.
            </p>
          </div>
        </div>
        <div class="image-section">
          <img src="images/imgone.jpeg" alt="imag" />
        </div>
      </div>
    </div>
  );
}
