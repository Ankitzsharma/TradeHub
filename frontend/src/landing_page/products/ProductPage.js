import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';
function ProductPage(){
    return(
        <>
        < Navbar />
        <Hero />
        <LeftSection 
            imageURL="media/images/kite.png" 
            ProductName='Kite' 
            productDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
            tryDemo='https://www.google.com' 
            learnMore='https://www.google.com' 
            googlePlay='https://play.google.com' 
            appStore='https://www.apple.com/' 
        />


        <RightSection 
            imageURL="media/images/console.png"
            ProductName="Console"
            productDescription="The central dashboard for your TradeHub account. Gain insights into your trades and investments with in-depth reports and visualisations."
            learnMore='https://www.google.com'
        />


        <LeftSection 
            imageURL="media/images/coin.png" 
            ProductName='Coin' 
            productDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
            tryDemo='https://www.google.com' 
            learnMore='https://www.google.com' 
            googlePlay='https://play.google.com' 
            appStore='https://www.apple.com/'  
        />


        <RightSection 
            imageURL="media/images/kiteconnect.png"
            ProductName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.."
            learnMore='https://www.google.com'
        />


        <LeftSection 
            imageURL="media/images/varsity.png" 
            ProductName='Varsity mobile' 
            productDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
            tryDemo='https://www.google.com' 
            learnMore='https://www.google.com' 
            googlePlay='https://play.google.com' 
            appStore='https://www.apple.com/' 
        />


        <Universe />
        <Footer />
        </>
    );
}

export default ProductPage;