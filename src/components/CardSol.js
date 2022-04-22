import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardSol() {
  return (
    <div className="cards">
      <p className="cards__item__text">
        We offer several ready made solutions that we have helped develop or we
        are their distributors.
      </p>
      <h1>READY MADE SOFTWARE!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/service-3.jpeg"
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
              src="images/service-6.jpeg"
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardSol;
