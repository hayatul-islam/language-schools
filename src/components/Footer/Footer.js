import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white py-5 mt-5">
            <Container>
                <div className="row">
                    <div className="col-md-3">
                        <img className="w-75" src={'https://language-school.cmsmasters.net/wp-content/uploads/2016/01/logo_footer.png'} alt="" />
                        <div className="text-muted mt-4">
                            <p>For more information about Hand Operated Centrifugal Precipitator Teaching Instruments In Primary and Secondary Schools check Aliexpres</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4>About School</h4>
                        <ul className="text-muted mt-4">
                            <li>About Us</li>
                            <li>Our Staff</li>
                            <li>Our Partners</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Programmes</h4>
                        <ul className="text-muted mt-4">
                            <li>Long-term Programmes</li>
                            <li>Intensive Programmes</li>
                            <li>Specialized Programme</li>
                            <li>Language Trainings</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Contact Info</h4>
                        <div className="text-muted mt-4">
                            <p>example@language-school.com</p>
                            <p>Call Us: 1-800-123-1234</p>
                            <p>Brooklyn, NY 10036, United States</p>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;