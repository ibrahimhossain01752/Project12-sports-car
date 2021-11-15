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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item >

        <Carousel.Item className="bannerImgDiv">
          <img
            className="d-block w-100 sliderImg"
            src="https://i.ibb.co/NmH7Nnd/car8.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="bannerImgDiv">
          <img
            className="d-block w-100 sliderImg"
            src="https://i.ibb.co/0BLfbRB/car14.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );
};

export default HomeBanner;

