import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="bg-light text-dark">
            <h1 className="mt-5 text-center">About Alvi Tourism </h1>


            <div>
                <h1 className="text-warning text-center">  Our Team</h1>
            </div>
            <Row>
                <Col>
                    <div className="card text-dark shadow-lg ms-5 me-5">
                        <img width="100%" height="400px" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-9/132893962_2808477312729846_2899808976811298083_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHUevUfEzjRfyppRItFS3lZq96IukVzzFWr3oi6RXPMVRDylndg4nqvsvSUPIdBLlIo-DTvAxjwIXbQlN-BsyGQ&_nc_ohc=kMDSmpdI5S8AX81BnZA&tn=o1T-fTcGNwkRO_0R&_nc_ht=scontent.fcgp7-1.fna&oh=f6cf604621cdf31fd754b843d17a2832&oe=619275CF" alt="" />
                        <h6>Ataul Hamid</h6>
                        <p class="title">CEO & Founder</p>
                        <p>He is founder of Alvi Tourism</p>
                        <p>ataul@gmail.com</p>
                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
                <Col>
                    <div className="card text-dark ms-5 me-5">
                        <img width="100%" height="400px" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t1.6435-1/p200x200/222628486_3217620958485171_451502788482977506_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFbPelGrdW0-NShGmqJwPfCk9zlaagSNGGT3OVpqBI0YQQ_tMTgFIL8jLRBfYLC_x0_1P5hzCsbdkbTvTcT3OCG&_nc_ohc=XWaDb_lM0wMAX9hZLur&_nc_ht=scontent.fcgp7-1.fna&oh=ed1e11b6cfac0d5cca1b33088e3bb196&oe=61939D78" alt="" />
                        <h6>Khorshed Alam</h6>
                        <p class="title">CEO & Founder</p>
                        <p>He is co-founder of ALvi Tourism</p>
                        <p>khorshed@gmail.com</p>
                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
                <Col>
                    <div className="card text-dark ms-5 me-5">
                        <img width="100%" height="400px" src="https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/248792222_2933023643626446_1178992367863151584_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=mfsaTvMSoCwAX-WPuGv&_nc_ht=scontent.fcgp7-1.fna&oh=c4f412b40e6b3105896cfbf7b15b1021&oe=618463CD" alt="" />
                        <h6>Irfan Ullah Munna</h6>
                        <p class="title">CEO & Founder</p>
                        <p>He is founder of Alvi Tourism</p>
                        <p>munna@gmail.com</p>
                        <Button variant="dark">Contact</Button>
                    </div>
                </Col>
            </Row>
            <br />
            <br />

        </div>
    );
};

export default About;