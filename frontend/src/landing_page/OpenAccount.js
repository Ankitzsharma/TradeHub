import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount(){
    return (
        <div className='container pt-5 text-center p-5'>
            <h1 className=''>Open a TradeHub account</h1>
            <p className='p-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link style={{width:"35%", margin:"0 auto"}} className='btn btn-primary' to='/signup'>Sign up for free</Link>
        </div>
    );
}

export default OpenAccount;