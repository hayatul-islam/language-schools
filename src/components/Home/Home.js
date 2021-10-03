import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import HighlightCourse from '../HighlightCourse/HighlightCourse';

const Home = () => {
    const [highlightCourse, setHighlightCourse] = useState([]);
    useEffect(() => {
        fetch('highlights.JSON')
            .then(res => res.json())
            .then(data => setHighlightCourse(data))
    }, [])
    return (
        <Container>
            <h2 className="text-center my-5 fw-normal">Choose Your Language</h2>
            <div className="row">
                {
                    highlightCourse.map(course => <HighlightCourse course={course}></HighlightCourse>)
                }
            </div>


        </Container>
    );
};

export default Home;