import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>We have a whole lot of Services you would want to check out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/service-4.jpeg"
              text="We can set up your AWS, Google, clod platforms within a short time for you to continue your business with limited downtime."
              label="CLOUD SERVER MANAGEMENTS - DEVOPS"
              path="/services"
            />
            <CardItem
              src="images/service-2.jpeg"
              text="We can assist you in the design, development and manufacturing of your electronic hardware solutions."
              label="CUSTOM HARDWARE DESIGN & MANUFACTURING"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/service-3.jpeg"
              text="We are ready to integrate AI capabilities in your business operations."
              label="AI INTEGRATION"
              path="/services"
            />
            <CardItem
              src="images/service-1.jpeg"
              text="We have the capacity to disguise or convert your daily repetitive tasks into a computer process to speed up your productivity."
              label="SYSTEMS AND PROCESS AUTOMATION"
              path="/services"
            />
            <CardItem
              src="images/service-5.jpeg"
              text="We can develop your software solutions on your preferred operating platform."
              label="WEB AND MOBILE DEVELOPMENT"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
