import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: 'linear',
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="carousel-container b1">
            <h1> BOOTCAMP {new Date().getFullYear()} </h1>
            <p>What are you waiting for?</p>
          </div>
          <div className="carousel-container b2">
            <h1>Your Reliable Outsourcing Partner</h1>
            <p>
              We are a software, hardware outsourcing company that has clients
              all over the world.
            </p>
          </div>
          <div className="carousel-container b3">
            <h1>Dedicated Development Teams</h1>
            <p>
              Our Engineers have the necessary niche skills, deep expertise, and
              are highly loyal.
            </p>
          </div>
          <div className="carousel-container b4">
            <h1>Web and Mobile Application Development</h1>
            <p>
              Leverage our Eight Years Expertise to create a solid software or
              hardware foundation for your Business.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
