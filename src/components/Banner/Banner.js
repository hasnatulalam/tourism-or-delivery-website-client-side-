import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Banner.css'
import img from '../../images/banner.png'

const Banner = () => {
    return (
        <div className="mb-5 h-75">
        <Carousel>
<Carousel.Item>
<img
  className="d-block w-100 h-50 "
  src="https://i.ibb.co/2yKfL6b/home2jpg.jpg" 
  alt="First slide"
/>
<Carousel.Caption>
  <h3>First slide label</h3>
  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block w-100 h-50"
  src="https://i.ibb.co/FbF4mFV/banner2pg.jpg" 
  alt="Second slide"
/>

<Carousel.Caption>
  <h3>Second slide label</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-block  w-100 h-50"
  src="https://i.ibb.co/jvc2JdS/slider-4.jpg" 
  alt="Third slide"
/>

<Carousel.Caption>
  <h3>Third slide label</h3>
  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
    </div>
    );
};

export default Banner;