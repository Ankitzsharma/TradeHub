import React from 'react';

function Team() {
  return (
    <div className="container">
      <hr></hr>
        <h1 className=" text-center ">People</h1>
      <div className="row p-5 mb-5 align-items-center">
        
        {/* Left: Image */}
        <div className="col-12 col-md-6 text-center">
          <img
            src="media/images/AnkitImage.png"
            className="img-fluid"
            alt="Founder Of TradeHub"
            style={{
              width: '320px',
              height: '320px',
              borderRadius: '6%',
              // border: '4px solid blue',
              transform: 'translate(15px, 20px)'
            }}
          />
          <p className="fs-5 fw-bold text-muted ms-5 mt-4">Ankit Sharma</p>
          {/* <p className="text-muted">Software Development Engineer</p> */}
        </div>

        {/* Right: Text */}
        <div className="col-12 col-md-6 fs-4 text-muted pb-3">
          {/* <h1 className="pb-4">About</h1> */}
          <p>
            <i><b>Ankit</b></i> bootstrapped and founded <a className='text-decoration-none' href='https://www.google.com/'>TradeHub</a> in 20XX to overcome the hurdles he faced during his decade-long stint as a trader. Today, TradeHub is changing the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{' '}
            <a href="https://www.google.com" className="text-decoration-none">Homepage</a> /{' '}
            <a href="https://www.google.com" className="text-decoration-none">TradingQnA</a> /{' '}
            <a href="https://www.google.com" className="text-decoration-none">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

