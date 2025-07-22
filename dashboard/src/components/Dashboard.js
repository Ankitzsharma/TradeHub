import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Summary from './Summary';
import WatchList from './WatchList';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import Apps from './Apps';

const Dashboard= () => {
    return (
        <div className='dashboard-container'>
            <WatchList />

            <div className='content'>
                <Routes>
                    <Route exact path='/' element={<Summary />} />
                    <Route path='/Orders' element={<Orders />} />
                    <Route path='/Holdings' element={<Holdings />} />
                    <Route path='/Positions' element={ <Positions /> } />
                    <Route path='/Funds' element={ <Funds /> } />
                    <Route path='/Apps' element={<Apps />} />
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;