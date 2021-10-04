import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../Course/Course';
import './Services.css';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <>
            <div className="banner-section mt-3">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center text-white pt-4 pb-3">
                        <h3 className="fw-normal fs-4">SERVICES</h3>
                        <p className="fw-0 ">Home/Services</p>
                    </div>
                </div>
            </div>
            <Container>

                <div className="row mt-5 pt-4">
                    {
                        courses.map(course => <Course course={course}></Course>)
                    }
                </div>


            </Container>
        </>
    );
};

export default Services;