import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeBanner.css';


const HomeBanner = () => {
    return (
        <Carousel fade>
        <Carousel.Item className="bannerImgDiv">
          <img
            className="d-block w-100 sliderImg"
            src="https://i.ibb.co/wC6qnyC/car10.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Porsche 718 Boxster</h3>
            <p>The Mazda MX-5 is one of the very best enthusiast’s cars on sale,</p>
          </Carousel.Caption>
        </Carousel.Item >

        <Carousel.Item className="bannerImgDiv">
          <img
            className="d-block w-100 sliderImg"
            src="https://i.ibb.co/NmH7Nnd/car8.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Alpine A110</h3>
            <p>The Mazda MX-5 is one of the very best enthusiast’s cars on sale, regardless of its</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="bannerImgDiv">
          <img
            className="d-block w-100 sliderImg"
            src="https://i.ibb.co/0BLfbRB/car14.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>BMW M3/M4</h3>
            <p>The Mazda MX-5 is one of the very best enthusiast’s cars on sale, regardless of its</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );
};

export default HomeBanner;

