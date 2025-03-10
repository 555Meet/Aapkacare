import React from 'react';
import Form from '../component/form';
import Boxes from '../component/boxes';
import HospitalSlider from '../component/slider1';
import OurServices from '../component/our-services';
import Testimonials from '../component/about-us';
import BoardMembers from '../component/board-member';
import Features from '../component/right-step';
import CareCamps from '../component/camps';
import OurWork from '../component/our-work';
import FooterMumbai from '../component/footer-mumbai';


const Home = () => {
    return (
        <>
            <Form />
            <Boxes />
            <HospitalSlider />
            <OurServices />
            <Testimonials />
            <Features />
            <CareCamps />
            <BoardMembers />
            <OurWork />
            <FooterMumbai />
        </>
    );
}

export default Home;