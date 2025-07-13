import React from 'react';

function Pricing(){
    return(
        <div className='container pb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <a href='www.zerodha.com' className='text-decoration-none' >See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>   {/*Blank column for spacing */}
                <div className='col-6'>
                    <div className='row '>
                        <div className='col border text-center'>
                            <h1 className='p-3'><i class="fa-solid fa-indian-rupee-sign">0</i></h1>
                            <p >Free Account Opening</p>
                        </div>
                        <div className='col border text-center '>
                            <h1 className='p-3'><i class="fa-solid fa-indian-rupee-sign">20</i></h1>
                            <p >Free Equity delivery and direct mutual funds</p>
                        </div>
                    </div>

                    {/* <div className='row'>
                        <div className='col'><img src='media/images/pricing-eq1.svg' /></div>
                        <div className='col'><p>Free account opening</p></div>
                        <div className='col'><img src='media/images/pricing-eq2.svg' /></div>
                        <div className='col'><p>Free equity delivery and direct mutual funds</p></div>
                        <div className='col'><img src='media/images/other-trades.svg'/></div>
                        <div className='col'><p>Intraday and F&O</p></div>
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default Pricing;