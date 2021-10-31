import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'
import img from '../../images/banner.png'

const Banner = () => {
    return (
        <div>
            <div className='mb-5 position-relative text-center'>
                <div>
                    <img className='img-fluid w-100' src="https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                </div>
                <div className='info text-light'>
                    <p>ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!</p>
                    <h1>Most Beautiful Place In Bangladesh</h1>
                    <Button id='btn-get-started' variant='light' className='m-0 mt-lg-2 w-50 text-uppercase'>Take a tour</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;