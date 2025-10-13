import React from 'react';
import Menu from './Menu';
import { api } from "../api";
import { LANDING_URL } from "../config";
const TopBar=()=>{
    const handleLogout = () => {
        api.post('/auth/logout').finally(() => {
            window.location.replace(`${LANDING_URL}/signup`);
        });
    };
    return(
        <div className='topbar-container'>
            <div className='indices-container'>
                <div className='nifty'>
                    <p className='index'>Nifty 50</p>
                    <p className='index-points'>{100.2} </p>
                    <p className='percent'></p>
                </div>
                <div className='sensex'>
                    <p className='index'>SENSEX</p>
                    <p className='index-points'>{100.2} </p>
                    <p className='percent'></p>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Menu />
              <button className="btn btn-blue" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default TopBar;