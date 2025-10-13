import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AuthForm from './AuthForm';

function Signup(){
    return(
        <>
        <Navbar />
        <div className='container p-4'>
            <h1 className='text-center mb-3'>Welcome to TradeHub</h1>
            <p className='text-center text-muted mb-4'>Sign in or create an account to access your dashboard.</p>
            <AuthForm />
        </div>
        <Footer />
        </>
    );
}

export default Signup;