import React from 'react';

function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-lg border-bottom Syle=backgroundColor:'#FFF">
                <div className="container ">
                    {/* Brand Name */}
                    <a className="navbar-brand" style={{color:'blue' ,fontWeight:'bold',fontSize:'1.5rem'}} href="#">TradeHub.</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' href='#'>Products</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' href='#'>Pricing</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' href='#'>Support</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link active' href='#'><i class="fa-solid fa-bars"></i></a>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        
    );
}

export default Navbar;