import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardSer() {
  return (
    <div className="cards">
      <h1>Check out our Core Services!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/service-1.jpeg"
              text="We can set up your AWS, Google, clod platforms within a short time for you to continue your business with limited downtime."
              label="CLOUD SERVER MANAGEMENTS - DEVOPS"
              path="/services"
            />
            <CardItem
              src="images/service-2.jpeg"
              text="We have the capabilities of integrating IoT solutions within your business process to increase your productivity."
              label="INTERNET OF THINGS"
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
              src="images/service-4.jpeg"
              text="We have the capacity to disguise or convert your daily repetitive tasks into a computer process to speed up your productivity."
              label="SYSTEMS AND PROCESS AUTOMATION"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/service-5.jpeg"
              text="We can develop your software solutions on your preferred operating platform."
              label="WEB AND MOBILE DEVELOPMENT"
              path="/services"
            />
            <CardItem
              src="images/service-6.jpeg"
              text="We have in-house designers that are responsible for the majority of graphic design. We are available to work on your next advertising campaigns."
              label="GRAPHIC DESIGN & ADVERTISING"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-6.jpg"
              text="We can assist you in the design, development and manufacturing of your electronic hardware solutions."
              label="CUSTOM HARDWARE DESIGN & MANUFACTURING"
              path="/services"
            />
            <CardItem
              src="images/img-7.jpg"
              text="We are available to assist you in implementing, deploying or developing your information technology related projects."
              label="IT PROJECT MANAGEMENT AND CONSULTANCY"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardSer;
