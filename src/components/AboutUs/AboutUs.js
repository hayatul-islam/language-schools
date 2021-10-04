import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="mt-5">
            <div className="about-img mb-4">
                <h2>About Us</h2>
                <img className="img-fluid" src={'https://language-school.cmsmasters.net/wp-content/uploads/2016/01/home-bg-3.jpg'} alt="" />
            </div>
            <div className="container">
            <div className="row pt-5 mt-4">
                <div className="col-md-4 p-4">
                    <h3 className="fw-normal">History</h3>
                    <h5 className="mt-4 mb-4 fw-normal">Sed posuere consectetur est at lobortis. Morbi leo risus porta.</h5>
                    <p>Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.</p>
                </div>
                <div className="col-md-4 p-4">
                    <h3 className="fw-normal">Mission</h3>
                    <h5 className="my-4 fw-normal">Nunc viverra est ullamcorper ult rices posuere cubilia tellus.</h5>
                    <p>Nullam aliquet, lacus nec pede sed tortor. Phasellus vestibulum. Nulla lobortis volutpat. Praesent faucibus. Sed non sapien. Curabitur condimentum auctor sapien. Nullam aliquet, lacus nec pede sed tortor. Phasellus vestibulum. Nulla lobortis.</p>
                </div>
                <div className="col-md-4 p-4">
                    <h3 className="fw-normal">Philosophy</h3>
                    <h5 className="my-4 fw-normal">Curabitur nec libero. Suspendisse justo sem, rutrum vel, varius.</h5>
                    <p>Aliquam ut orci pellentesque adipiscing justo quis ipsum. Nam nunc iaculis quis, ultricies massa. Mauris et arcu. In hac habitasse platea dictumst. Vestibulum ullamcorper id, congue risus. Vivamus sed enim. Mauris pretium, diam sodales turpis.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;