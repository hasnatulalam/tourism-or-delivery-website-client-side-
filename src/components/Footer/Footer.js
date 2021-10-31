import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='m-5 p-5 rounded-3 text-center bg-secondary text-light'>

            <Row >
                <Col>
                    <h5>Company Name</h5>
                    <h5 className="text-warning mt-5">Alvi Tourism</h5>
                </Col>
                <Col>
                    <h5>Quicks Links</h5>
                    <h6>Get Started</h6>
                    <h6>Top Leaders</h6>
                    <h6>Success Stories</h6>
                    <h6>Event/tickets</h6>
                    <h6>News</h6>
                    <h6>Life Style</h6>
                    <h6>About</h6>
                </Col>
                <Col>
                    <h5>Get Started</h5>

                    <p>Get Access to your full training and marketing</p>
                    <Button>Register Now</Button>
                </Col>
                <Col>
                    <h5>Contact US</h5>
                    <h5>Phone: 0128937289</h5>
                    <h6>info@gmail.com</h6>
                    <a href="https://www.facebook.com"> <i class="fab fa-facebook"></i></a>
                </Col>
            </Row>
        </div>

    );
};

export default Footer;