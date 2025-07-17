import React from "react";

function Hero(){
    return(
        <div className='container'>
            <div className=' p-5 text-center'>
                <h1>Technology</h1>
                <h5 className='text-muted'>Sleek, modern and intuitive trading platforms</h5>
                <p>Check out our <a href='https://www.google.com' className='text-decoration-none'>investment offering <i class="fa-solid fa-arrow-right"></i> </a></p>
            </div>
            <hr></hr>
        </div>
    );  
}

export default Hero;    