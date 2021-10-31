import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="subComponent-lg bg-light" id="contactBody">
            <Container>
                <header className="headerTitle text-center">
                    <h1>Contact</h1>
                    <p>GET IN TOUCH WITH US</p>
                </header>
                <section className="svg-group text-center">
                    <Row>
                        <Col lg="4" md="4">
                            <div className="svg-card-3">
                                {/* <Phone width="50" height="55" strokeWidth="1" /> */}
                                <p>0912 345 6789</p>
                            </div>
                        </Col>
                        <Col lg="4" md="4">
                            <div className="svg-card-3">
                                {/* <MapPin width="55" height="55" strokeWidth="1" /> */}
                                <p>Chittagong, Bangladesh</p>
                            </div>
                        </Col>
                        <Col lg="4" md="4">
                            <div className="svg-card-3">
                                {/* <Mail width="55" height="55" strokeWidth="1" /> */}
                                <p>alvitourism@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                </section>
                <hr />
                <br />
                <section className="msg text-center">
                    <form action="">
                        <Row>
                            <Col sm="6">
                                <input
                                    type="text"
                                    name="Name"
                                    id="reviewer-name"
                                    placeholder="Your Name"
                                    required
                                />
                                <br />
                                <input
                                    type="email"
                                    name="Email"
                                    id="reviewer-email"
                                    placeholder="Your email"
                                    required
                                />
                            </Col>
                            <Col>
                                <textarea
                                    name="Message"
                                    id="reviewer-message"
                                    rows="4"
                                    placeholder="Your Message"
                                />
                                <Button outline color="light" className="float-left">
                                    Send Message
                  </Button>
                            </Col>
                        </Row>
                    </form>
                </section>
            </Container>
        </div>
    );
};

export default Contact;