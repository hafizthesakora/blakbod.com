import React from 'react';
import './Description.css';

export default function MissionSection() {
  return (
    <div class="section">
      <div class="container">
        <div class="content-section">
          <div class="title">
            <h1>Mission & Vision</h1>
            <div className="border"></div>
          </div>
          <div class="content">
            <h3>Mission Statement:</h3>
            <p className="align">
              Our Mission is to offer the Highest quality, User - Centric
              Application Software Solutions and I.T Consulting Services to our
              Clients and Create Value for our Shareholders.
            </p>
          </div>
          <div class="content">
            <h3>Vision Statement:</h3>
            <p className="align">
              To become the First Choice brand for Corperate, Social, and
              Educational sector software solutions provider for Africa by 2030.
            </p>
          </div>
        </div>
        <div class="image-section">
          <img src="images/service-5.jpeg" alt="imag" />
        </div>
      </div>
    </div>
  );
}
