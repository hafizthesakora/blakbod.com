import React from 'react';
import './CareerSection.css';

export default function CareerSection() {
  return (
    <div class="section">
      <div class="container">
        <div class="content-section">
          <div class="title">
            <h1>Careers</h1>
            <div className="border"></div>
          </div>
          <div class="content">
            <h3> Career Opportunities at BlakBod:</h3>
            <p className="align">
              You want to write great software or design the next big thing, we
              want to deliver to our clients. <br /> <br />
              To make this happen, we are constantly looking for the best people
              with an inner passion to build amazing things, regardless of thier
              role in our organisation. <br /> <br />
              You can apply by sending your CV and cover letter to{'  '}
              <a href="mailto:blakbod64@gmail.com">jobs@blakbod.com</a>
            </p>
          </div>
        </div>
        <div class="img-section">
          <img src="images/sa.jpg" alt="imag" />
        </div>
      </div>
    </div>
  );
}
