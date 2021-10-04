import React from 'react';
import './Contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationArrow, faInbox } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div>
            <div className="banner-section">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center text-white pt-4 pb-3">
                        <h3 className="fw-normal">Contacts</h3>
                        <p className="fw-0 ">Home/Contacts</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <legend className="fs-6 mt-4">Name</legend>
                                <input className="form-control rounded-pill" type="text" placeholder="Your Name" />
                            </div>
                            <div className="col-md-6">
                                <legend className="fs-6 mt-4">Email</legend>
                                <input className="form-control rounded-pill" type="email" placeholder="Your Email" />
                            </div>
                            <div className="col-md-6">
                                <legend className="fs-6 mt-4">Phone</legend>
                                <input className="form-control rounded-pill" type="Phone" placeholder="Your Phone" />
                            </div>
                            <div className="col-md-6">
                                <legend className="fs-6 mt-4">Subject</legend>
                                <input className="form-control rounded-pill" type="text" placeholder="Subject" />
                            </div>
                            <div>
                                <legend className="fs-6 mt-4">Messages</legend>
                                <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Your messages"></textarea>
                            </div>
                            <div>
                                <button className="message-btn">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* contacts  */}
                        <div>
                            <h3 className="mb-5">Contact Information</h3>
                            <div>
                                <small className="fs-5 p-3 text-success"><FontAwesomeIcon icon={faLocationArrow} /></small>
                                <small>Brooklyn, NY 10036, United States</small>
                            </div>
                            <div className="my-3">
                                <small className="fs-5 p-3 text-success"><FontAwesomeIcon icon={faPhone} /></small>
                                <small>1-800-123-1234</small>
                            </div>
                            <div>
                                <small className="fs-5 p-3 text-success"><FontAwesomeIcon icon={faInbox} /></small>
                                <small>hayatulemon340@gmail.com</small>
                            </div>
                        </div>

                        {/* social media */}
                        <div className="mt-5">
                            <h3>Social Media</h3>
                            <div className="d-flex">
                                <div className="pe-4">
                                    <button className="message-btn"><i class="fab fa-facebook-f"></i> Facebook</button>
                                </div>
                                <div>
                                    <button className="message-btn"><i class="fab fa-twitter"></i> Twitter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;