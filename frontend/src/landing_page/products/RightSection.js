import React from 'react';

function RightSection({ imageURL, ProductName, productDescription, learnMore }) {
  return (
    <div className="container-fluid px-4 py-5 pt-5 pb-5 mt-5 mb-5">
      <div className="row align-items-center justify-content-end">

        {/* Text */}
        <div className="col-12 col-md-5 text-md-start mb-4 mb-md-0">
          <h2 className="fw-semibold ps-4">{ProductName}</h2>
          <p className="mt-3 mb-4 ps-4" style={{ lineHeight: '1.9', wordSpacing: '3px' }}>
            {productDescription}
          </p>
          <a href={learnMore} className="text-decoration-none text-primary ps-4">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Image */}
        <div className="col-12 col-md-6 text-start">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>
        
      </div>
    </div>
  );
}

export default RightSection;


