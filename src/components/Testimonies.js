import React from 'react';
import './Testimonies.css';

function Testimonies() {
  return (
    <div className="testimonials">
      <div className="inner">
        <h1>THE TEAM</h1>
        <div className="border"></div>

        <div className="row">
          <div className="col">
            <div className="testimonial">
              <img src="images/img-4.jpg" alt="" />
              <div className="name">Toyyib Hafiz (PHD)</div>
              <div className="stars">
                Web design/development, Department Head
              </div>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="images/futa.jpg" alt="" />
              <div className="name">Mohammed Aminu Futa</div>
              <div className="stars">AWS Solutions Architect</div>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="images/cfo.jpg" alt="" />
              <div className="name">Issah Iddrissu</div>
              <div className="stars">
                Corporate Business and Business Modelling, Head
              </div>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="images/hop.jpg" alt="" />
              <div className="name">Safiya Abdul Majid</div>
              <div className="stars">Chief Publicty Head</div>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="images/hr.jpg" alt="" />
              <div className="name">Fawzan Nurudeen (PhD)</div>
              <div className="stars">
                Human Resource/ Research and Policy Analyst
              </div>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="images/clo.jpg" alt="" />
              <div className="name">Hussien mohammed</div>
              <div className="stars">Chief Logistics Officer</div>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="images/sa.jpg" alt="" />
              <div className="name">Najwan nour El jalil </div>
              <div className="stars">Software Analyst</div>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="images/swat.jpg" alt="" />
              <div className="name">Fred Nyarko</div>
              <div className="stars">Chief Electrical Analyst</div>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src="images/cto.jpg" alt="" />
              <div className="name">Ahmed Ali(PhD).</div>
              <div className="stars">Chief Technology Officer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
