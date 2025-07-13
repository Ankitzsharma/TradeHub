import React from 'react';

function Awards() {
  return (
    <div className="container my-5 pb-5">
      <div className="row align-items-center">
        {/* Image Column */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Text + List Column */}
        <div className="col-12 col-md-6">
          <h2 className="pb-2">Largest Stock Broker in India</h2>
          <p>
            2+ Million TradeHub Clients contribute to over 15% of all retail <br></br>order volumes
            in India daily by trading and investing in:
          </p>

          <div className="row pt-3">
            <div className="col-6">
              <ul className="ps-3">
                <li><p>Mutual Funds</p></li>
                <li><p>Exchange Traded Funds (ETFs)</p></li>
                <li><p>Initial Public Offerings (IPOs)</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="ps-3">
                <li><p>Stocks & IPO</p></li>
                <li><p>Direct Mutual Funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <img src="media/images/pressLogos.png" alt="Press Logos" className="img-fluid pt-4" style={{width:'90%'}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
