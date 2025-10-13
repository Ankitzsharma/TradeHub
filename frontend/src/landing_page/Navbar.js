import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        
<nav className="navbar navbar-expand-lg bg-light border-bottom navbar sticky-top" style={{backgroundColor:'#FFF'}}  >
                <div className="container ">
                    {/* Brand Name */}
                    <Link className="navbar-brand" style={{color:'blue' ,fontWeight:'bold',fontSize:'2rem'}} to="/">TradeHub.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about"> About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/products'>Products</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/pricing'>Pricing</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to='/support'>Support</Link>
                            </li>
                            <li className='nav-item'>
<Link className='nav-link active' to='/'><i className="fa-solid fa-bars"></i></Link>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        
    );
}

export default Navbar;