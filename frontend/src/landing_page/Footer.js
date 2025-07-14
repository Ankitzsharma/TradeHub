import React from 'react';

function Footer(){
    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-4 p-3'>
                    <a className="navbar-brand" style={{color:'blue' ,fontWeight:'bold',fontSize:'1.5rem'}} href="#">TradeHub.</a> <br></br>
                    <p className='pt-2'>&copy; 2010-2025, Not TradeHub Broking Ltd.<br></br>All rights reserved.</p>
                    {/* <p>All rights reserved.</p> */}
                    <a href='#'><i class="fa-brands fa-twitter p-1"></i></a>
                    <a href=''><i class="fa-brands fa-meta p-1"></i></a>
                    <a href=''><i class="fa-brands fa-instagram p-1"></i></a>
                    <a href=''><i class="fa-brands fa-linkedin p-1"></i></a>
                    <a href=''><i class="fa-brands fa-telegram p-1"></i></a>
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <a className='text-decoration-none p-2' href='#'>About</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Products</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Pricing</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Referral Programme</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Careers</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>TradeHub.tech</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Press & media</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>TradeHub cares </a>
                    
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <a className='text-decoration-none p-2' href='#'>Contact</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Support portal</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Z-Connect blog</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>List of charges</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Download & resources</a><br></br>

                </div>
                <div className='col'>
                    <h5>Account</h5>
                    <a className='text-decoration-none p-2' href='#'>Open an account</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>Fund transfer</a><br></br>
                    <a className='text-decoration-none p-2' href='#'>60 day challenge</a><br></br>
                </div>
            </div>
            <div>
                <p style={{ paddingTop:'40px',fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.6' }}>
                TradeHub is committed to empowering individuals by providing a seamless, intuitive, and powerful stock trading experience. Whether you're a beginner exploring your first investment or a seasoned trader seeking advanced tools, our platform is designed to meet your needs. We aim to bring transparency, real-time insights, and intelligent tools together in one unified ecosystem. Our mission is to democratize trading by simplifying financial data and helping users make smarter, faster, and more informed decisions. Please note that all investments involve risks, and it's important to conduct your own research or seek financial advice before investing. TradeHub is not a registered stockbroker and provides services solely for educational and analytical purposes.
                </p>
                <p style={{ paddingTop:'10px',fontSize: '0.9rem', color: '#5c636aff', lineHeight: '1.6' }}>
                TradeHub is committed to empowering individuals by providing a seamless, intuitive, and powerful stock trading experience. Whether you're a beginner exploring your first investment or a seasoned trader seeking advanced tools, our platform is designed to meet your needs. faster, and more informed decisions. Please note that all investments involve risks, and it's important to conduct your own research or seek financial advice before investing. TradeHub is not a registered stockbroker and provides services solely for educational and analytical purposes.
                </p>
                <p style={{ paddingTop:'10px',fontSize: '0.9rem', color: '#6c757d', lineHeight: '1.6' }}>
                TradeHub is committed to empowering individuals by providing a seamless, intuitive, and powerful stock trading experience. Whether you're a beginner exploring your first investment or a seasoned trader seeking advanced tools, our platform is designed to meet your needs. We aim to bring transparency, real-time insights, and intelligent tools together in one unified ecosystem.TradeHub is not a registered stockbroker and provides services solely for educational and analytical purposes.
                </p>

            </div>
        </div>
    );
}

export default Footer;