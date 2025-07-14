import React from 'react';
import Navbar from '../Navbar';
import Hero from '../home/Hero';
import OpenAccount from '../OpenAccount';
import Brokerage from './Brokerage';
import Footer from '../Footer';
function PricingPage() {
    return(
        <>
        <Navbar />
        <Hero />
        <OpenAccount />
        <Brokerage />
        <Footer />
        </>
    );
}

export default PricingPage;