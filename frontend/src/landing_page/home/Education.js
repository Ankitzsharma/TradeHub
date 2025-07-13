import React from 'react';

function Education(){
    return (
        <div className='container pt-5 pb-5'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg' alt='Education' />
                </div>
                <div className='col pt-5'>
                    <h1 className='pt-5'>Free and open market education</h1>
                    <p className='pt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='www.google.com' className='text-decoration-none pt-3'>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className='pt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                    <a href='www.microsoft.com' className='text-decoration-none pt-3'>Trading Q&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;