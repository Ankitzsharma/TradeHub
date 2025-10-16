import React from 'react';      
import { Link } from 'react-router-dom';
function Hero(){
    return(
        <div className='container'>
            <div className='row text-center' >
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
                <h1 className=''>Trade What Matters</h1>
                <p>Online Platform to invest in Stocks, Derivatives, Mutual Funds, and More</p>
                <Link style={{width:"35%", margin:"0 auto"}} className='btn btn-primary' to="/signup">Signup Now</Link>
            </div>
        </div>
    );
}

export default Hero;