import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="mt-5">
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image className="w-50" src={'https://language-school.cmsmasters.net/wp-content/themes/language-school/img/logo_retina.png'} alt="" />
                    </Navbar.Brand>
                    <Nav className="mx-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/about">About Us</NavLink>
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                        <NavLink className="nav-link" to="/#">Monmoto</NavLink>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;