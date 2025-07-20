import React from "react";

function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 m-5'>
                <div className='col-8 border text-start p-2'>
                    <a className='text-decoration-none' href='https://www.google.com'><h5 className='p-2' >Brokrage Calculator</h5></a>
                    <ul className='text-muted pt-2' style={{lineHeight:'35px'}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of $50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged $20 per contract note. Courier charges apply.</li>
                        <li>For NRI acoount (non-PIS), 0.5% or $100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI acoount(PIS), 0.5% or $200 per executed order for equity (Whichever is lower).</li>
                        <li>if the account is in dept balance, any order place will be charged $2 per executed order instead of $2 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 border p-2'>
                    <a className='text-decoration-none' href='https://www.google.com'><h5 className='p-2'>List Of Charges</h5></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;   