import React from 'react';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
function NotFound(){
    return (
        <>
        <Navbar />
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p>Sorry, The Page Are You Looking For Does Not Exist.</p>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default NotFound;