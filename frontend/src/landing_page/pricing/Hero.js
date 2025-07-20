import React from 'react';

function Hero(){
    return(
        <div className='container p-5'>
            <div className='row text-center pb-4'>
                <h1 className='p-2'>Pricing</h1>
                <p className='pb-5 text-muted'>Free Equity Investments and flat 20 traday anf F&O trades.</p>
            </div>

            <div className='row mt-5 pt-5'>
                <div className='col-4 text-center p-4'>
                    <img style={{width:'250px'}} src='media/images/pricing0.svg' alt=''/>
                    <h3 className='p-2'>Free equity delivery</h3>
                    <h6 className='text-muted' style={{lineHeight:'2', wordSpacing:'4px'}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h6>
                </div>
                <div className='col-4 text-center p-4'>
                    <img style={{width:'250px'}} src='media/images/pricing0.svg' alt=''/>
                    <h3 className='p-2'>Intraday and F&O trades</h3>
                    <h6 className='text-muted' style={{lineHeight:'2',wordSpacing:'4px'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h6>
                </div>
                <div className='col-4 text-center p-4'>
                    <img style={{width:'250px'}} src='media/images/pricing0.svg' alt=''/>
                    <h3 className='p-2'>Free direct MF</h3>
                    <h6 className='text-muted' style={{lineHeight:'2', wordSpacing:'4px'}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h6>
                </div>

            </div>
            
        </div>
        
            
    );
}

export default Hero;