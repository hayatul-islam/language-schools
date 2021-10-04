import React, { useEffect, useState } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import HighlightCourse from '../HighlightCourse/HighlightCourse';
import './Home.css';

const Home = () => {
    const [highlightCourse, setHighlightCourse] = useState([]);
    useEffect(() => {
        fetch('highlights.JSON')
            .then(res => res.json())
            .then(data => setHighlightCourse(data))
    }, [])
    return (
        <Container>

            <div className="mt-5">
                <h2 className="text-center fw-normal">Frequently Asked Questions – Language courses</h2>
                <div className="row mt-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 p-4">
                        <p className="mt-3">After paying for the trip in full, and around 1-2 weeks before departure, we will send you the travel voucher via email. This includes the address of the accommodation as well as your e-ticket for the flight if this was booked with us.</p>
                    </div>
                    <div className="col-md-5 p-4">
                        <div>
                            <div className="d-flex justify-content-between mt-3">
                                <small>ENGLISH</small>
                                <small>100%</small>
                            </div>
                            <ProgressBar variant="success" className="pagination" now={100} />
                        </div>
                        <div>
                            <div className="d-flex justify-content-between mt-3">
                                <small>GERMAN</small>
                                <small>91%</small>
                            </div>
                            <ProgressBar variant="warning" className="pagination" now={91} />
                        </div>
                        <div>
                            <div className="d-flex justify-content-between mt-2">
                                <small>FRENCH</small>
                                <small>83%</small>
                            </div>
                            <ProgressBar variant="danger" className="pagination" now={83} />
                        </div>
                    </div>
                </div>
            </div>

            {/* highlight course  */}
            <div className="mt-5">
                <h2 className="text-center my-5 fw-normal">Choose Your Language</h2>
                <div className="row">
                    {
                        highlightCourse.map(course => <HighlightCourse course={course}></HighlightCourse>)
                    }
                </div>
            </div>


        </Container>
    );
};

export default Home;