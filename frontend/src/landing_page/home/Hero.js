import React from 'react';      

function Hero(){
    return(
        <div className='container'>
            <div className='row text-center' >
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5' />
                <h1 className=''>Trade What Matters</h1>
                <p>Online Platform to invest in Stocks, Derivatives, Mutual Funds, and More</p>
                <button style={{width:"35%", margin:"0 auto"}} className='btn btn-primary'>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;