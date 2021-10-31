import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import OurRooms from '../OurRooms/OurRooms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurRooms></OurRooms>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;