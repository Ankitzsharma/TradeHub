import React from 'react';

function Stats(){
    return (
        <div className='container p-2 ml-2 p-5'>
            <div className='row'>
                <div className='col-5 '>
                    <h1>Trust with confidence</h1>
                    <h3 className='pt-5 fs-4'>Customer-first always</h3>
                    <p className='text-secondary'>That's why 1.6+ crore customers trust TradeHub with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    
                    <h3 className='pt-4 fs-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a>Our philosophies.</a></p>

                    
                    <h3 className='pt-4 fs-4'>The TradeHub universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    
                    <h3 className='pt-4 fs-4'>Do better with money</h3>
                    <p className='text-secondary'>With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 text-center pb-5'>
                    <img src='media/images/ecosystem.png' alt='Ecosystem' style={{width: "80%"}} />

                    <div className='text-center'>
<a href='www.google.com' className='text-decoration-none'>Explore our Products <i className="fa-solid fa-arrow-right-long" >&nbsp; &nbsp; &nbsp; &nbsp;</i> </a>

<a href='www.chrome.com' className="text-decoration-none">Try Kite Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className='text-center pb-5'><img src='media/images/pressLogos.png' alt='PressLogos'  /></div>
            </div>

        </div>
    );
}

export default Stats;