import React from 'react';

function Hero(){
    return(
        <div className='container-fluid ps-5 ' id='supportHero'>
            
            <div className='p-5 pt-5 mb-5 ps-5 ms-5' id='supportWrapper'>
                <h3>Support Portal</h3>
                <button className='btn btn-light ' style={{width:'8rem'}} ><b>My Ticket</b></button>
            </div>

            <div className='row p-5 mb-5 ms-5'>
                <div className='col-6  p-5'>
                    <h2>Search for an answer or browse help topics<br></br> to create a ticket.</h2>
                    <input style={{width:'28em',padding:'7px',borderRadius:'12px', marginTop:'12px'}}  placeholder='Eg: how do i activate F&O  Why is my order getting rejected..' />

                    <div className='pt-3'id='supporter' >
                        <a className='text-decoration-none' style={{color:'white'}}  href='' >Track account opening <i class="fa-solid fa-up-right-from-square"></i> &nbsp;</a><br></br>
                        <a className='text-decoration-none' style={{color:'white'}}  href=''>Track segment activation <i class="fa-solid fa-up-right-from-square"></i> </a><br></br>
                        <a className='text-decoration-none' style={{color:'white'}}  href=''>Intraday. <i class="fa-solid fa-up-right-from-square"></i> &nbsp;</a>
                        <a className='text-decoration-none' style={{color:'white'}}  href=''>Margins <i class="fa-solid fa-up-right-from-square"></i> </a><br></br>
                        <a className='text-decoration-none' style={{color:'white'}}  href=''>Kite user manual <i class="fa-solid fa-up-right-from-square"></i> </a>
                    </div>
                </div>
                <div className='col-6 p-3 pb-5 mb-5'>
                    <h2>Featured</h2>
                    <ol>
                        <li><a style={{textDecoration:'none'}}  href=''>Current Takeover and Delisting - January 2025</a></li>
                        <li><a style={{textDecoration:'none'}}  href=''>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
                
            </div>
        </div>
    );
}

export default Hero;