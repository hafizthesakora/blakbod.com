import React from 'react';
import './hakk.css';

export default function Hakk() {
  return (
    <div class="part">
      <div class="container">
        <div class="ctnt-section">
          <div class="title">
            <h1>Meet Our C. E. O</h1>
            <div className="border"></div>
          </div>
          <div className="words">
            <h3>
              Blakbod is headed by C.E.O Abdul Haqq Musah Adam, a computer
              scientist with a drive to reshape the technological landscape of
              Ghana and Africa. He is a seasoned software and hardware engineer
              whom has worked with companies in USA, Norway, Kenya and in Ghana.
            </h3>
            <br />
            <p className="align">
              He was the lead engineer of a Ghana Government project in
              digitizing water systems in the north. He won the National Campus
              Pitch organised by the Ministry of Business Development. He was
              selected as part of the top 20 participants out of the 16,000
              applicants in the National Presidential Business Pitch. He
              currently is amongst the top 80 McDan challenge finalist out of
              9000 applicants through his flagship application 'Wheels_gh' and
              also a finalist in the 2021 Tony Elumelu African Entreprenuership
              Challenge. Abdul Haqq believe in the passion being driven by I.T
              in the 21st century. He puts more emphasis on the purpose that
              every young Ghanaian must endeavour to venture into the tech space
              where there is something for everyone!
            </p>
          </div>
        </div>
        <div className="img-section">
          <img src="images/ceo.jpg" alt="imag" />
        </div>
      </div>
    </div>
  );
}
