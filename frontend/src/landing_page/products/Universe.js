import React from 'react';

function Universe() {
    return (
        <div className='container'>
            <div className='p-5 mb-5 text-center'>
                <h4>want to know more about our technology stack? Check out the <a href='https://www.google.com' className='text-decoration-none'>TradeHub.tech</a> blog.</h4>
            </div>

            <div className='text-center pb-5 mb-5'>
                <h1>The TradeHub Universe</h1>
                <p className='p-3'>
                    Extend your trading and investment experience even further with our partner platforms.
                </p>

                {/* First row */}
                <div className='row pb-5 pt-4 mb-3'>
                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                        <img src='media/images/smallcaseLogo.png' className='img-fluid' alt='smallcase' />
                        <h6 className='text-muted pt-3'>Thematic investment platform</h6>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                        <img src='media/images/goldenpiLogo.png' style={{ width: '190px' }} className='img-fluid' alt='goldenpi' />
                        <h6 className='text-muted pt-3'>Bond Trading platform</h6>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                        <img src='media/images/sensibullLogo.svg' style={{ width: '190px' }} className='img-fluid' alt='sensibull' />
                        <h6 className='text-muted pt-4 mt-2'>Asset Management</h6>
                    </div>
                </div>

                {/* Second row */}
                <div className='row  mb-3'>
                    <div className='col-12 col-sm-4 col-md-4 mb-4'>
                        <img src='media/images/dittoLogo.png' className='img-fluid' style={{ width: '150px' }} alt='smallcase' />
                        <h6 className='text-muted pt-3'>Thematic investment platform</h6>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                        <img src='media/images/streakLogo.png' style={{ width: '190px' }} className='img-fluid' alt='goldenpi' />
                        <h6 className='text-muted pt-3'>Bond Trading platform</h6>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                        <img src='media/images/smallcaseLogo.png' style={{ width: '190px' }} className='img-fluid' alt='sensibull' />
                        <h6 className='text-muted pt-4 mt-2'>Asset Management</h6>
                    </div>
                </div>
                
                {/* <button style={{width:"35%", margin:"0 auto"}} className='btn btn-primary'>Signup for free</button> */}

                <button style={{margin:"0 auto", width:"25%", fontSize:"20px",fontWeight:""}} className='btn btn-primary '>Sign up for free</button>

            </div>
        </div>
    );
}

export default Universe;
