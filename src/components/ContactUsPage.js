import React from 'react';
import './ContactUsPage.css';

export default function MissionSection() {
  return (
    <div class="section-cp">
      <div class="container-con">
        <div class="contentsection">
          <div class="title">
            <h1>Contact Us </h1>
            <div className="border"></div>
          </div>
          <table cellSpacing={50}>
            <tr>
              <td>
                <div className="content">
                  <h3>Main Office Location:</h3>
                  <p className="align">
                    No. 4 Naaso Street, North Legon. <br />
                    Accra, Ghana, <br />
                    West Africa
                  </p>
                </div>
              </td>
              <td>
                <div class="content">
                  <h3>General Enquiries:</h3>
                  <p className="align">
                    +233 (0) 54 972 6457 <br />
                    +233 (0) 54 972 6457 <br />
                    <a href="mailto:blakbod64@gmail.com">SayHi@blakbod.com</a>
                  </p>
                </div>
              </td>

              <td>
                <div class="content">
                  <h3>Technical Support:</h3>
                  <p className="align">
                    +3 249 711 7950 <br />
                    +233 (0) 50 159 7583 <br />
                    <a href="mailto:blakbod64@gmail.com">SayHi@blakbod.com</a>
                  </p>
                </div>
              </td>

              <td>
                <div class="content">
                  <h3>Donations:</h3>
                  <p className="align">
                    You can please reach out to us to help donate to the{' '}
                    <a href="/">Children in IT Project</a> through <br />
                    +3 249 711 7950 <br />
                    +233 (0) 50 159 7583 <br />
                    <a href="mailto:blakbod64@gmail.com">
                      Donations@blakbod.com
                    </a>
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </div>
        {/* <div class="imagesection">
          <img src="images/hakk-2.jpeg" alt="imag" />
        </div> */}
      </div>
    </div>
  );
}
