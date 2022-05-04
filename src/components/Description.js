import React from 'react';
import './Description.css';

export default function Description({ bootcamp }) {
  const AboutDescription = () => {
    return (
      <>
        <div class="content-section">
          <div class="title">
            <h1>BLAKBOD BOOTCAMP</h1>
          </div>
          <div className="content">
            <p className="align">
              Blakbod I.T Bootcamp.- is an annual program that seeks to bridge
              the gap between University and industry. At blakbod Bootcamp we
              train students in the following areas for a duration of 6
              weeks(every saturday) for 4 hrs with a focus on the following;{' '}
              <b>
                Web Development, Graphic Design, Public speaking, Business
                development.
              </b>{' '}
              Over the years we have partnered with various companies to help us
              execute our vision for a brighter tomorrow. <br />
              <h3>
                Partners: National Entreprenuership and Innovation Plan, Focom
                Ghana, Analytic Displays, Kumasi Business incubator, Spacial
                Labs inc. <br /> <i>Rate: 250cedis</i> <br /> Location: knust
                business incubator <br /> Freebies: 100GB worth of tutorials,
                Stickers, Financing coaching, Capacity building, Certificate.
              </h3>
            </p>
          </div>
        </div>
        <div class="image-section">
          <img src="images/boot-1.jpeg" alt="imag" />
        </div>
      </>
    );
  };

  const BootcampDesc = () => {
    return (
      <>
        <div class="content-section-desc">
          <div class="title">
            <h1>BLAKBOD GHANA</h1>
            <div className="border"></div>
          </div>
          <div class="content">
            <p className="align">
              BLAKBOD is a limited liability company registered under the
              registrar generals department of Ghana to undertake software
              developmemnt, hardware configuration, AI simulations and other I.T
              related activities. At blakbod we are headed by Abdul Haqq Musah
              Adam, a computer scientist with a drive to reshape the
              technological landscape of Ghana and Africa. <br />
            </p>
            <h3>
              Partners: National Entreprenuership and Innovation Plan Focom
              ghana Kumasi Business incubator. Spacial Labs inc. <br /> Rate:
              250cedis <br /> Location: knust business incubator <br />{' '}
              Freebies: 100gigworth of tutorials Stickers Financing coaching
              Capacity building Certificate
            </h3>
          </div>
        </div>
        <div class="image-section">
          <img src="images/service-4.jpeg" alt="imag" />
        </div>
      </>
    );
  };

  return (
    <div class="section-desc">
      <div class="container-desc">
        {bootcamp ? <AboutDescription /> : <BootcampDesc />}
      </div>
    </div>
  );
}
