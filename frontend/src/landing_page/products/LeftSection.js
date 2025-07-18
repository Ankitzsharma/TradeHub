import React from 'react';

function LeftSection({
    imageURL,
    ProductName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container-fluid  pb-5 pt-5 mb-5 mt-5">
            <div className="row justify-content-center">
                {/* Image */}
                <div className="col-12 col-md-6 text-center">
                    <img src={imageURL} className="img-fluid" alt="Product" />
                </div>

                {/* Text */}
                <div className="col-12 col-md-5 p-4 mt-3  text-start text-md-start">
                    <h2 className="fw-semibold">{ProductName}</h2>
                    <p className="mt-3 mb-4 " style={{ lineHeight: '1.9', wordSpacing: '3px' }}>
                        {productDescription}
                    </p>
                    <div className="mb-3 pt-3">
                        <a href={tryDemo} className="text-decoration-none pe-4 text-primary">
                            Try Demo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href={learnMore} className="text-decoration-none ps-5 text-primary">
                            LearnMore <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="d-flex justify-content-start justify-content-md-start flex-wrap gap-3">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" style={{ width: '136px' }} alt="Google Play" />
                        </a>
                        <a href={appStore}>
                            <img src="media/images/appstoreBadge.svg" style={{ width: '126px' }} alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
