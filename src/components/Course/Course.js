import React from 'react';
import { Card } from 'react-bootstrap';

const Course = (props) => {
    const {name, img, price, duration, category} = props.course;
    return (
        <div className="col-md-3">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="fs-6 mb-3">{name}</Card.Title>
                    <Card.Text className="d-flex justify-content-between">
                        <small className="text-muted">{category}</small>
                       <span className="coursePrice">${price}</span> 
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center fs-6">                    
                    <small className="text-muted">{duration}</small>
                <button className="addToCart-btn">Add to cart</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Course;