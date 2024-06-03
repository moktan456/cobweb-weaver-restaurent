import React from "react";
import {link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const NavigationBar = ()=>{
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">
                Cobweb Weaver Restaurent
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <Nav.Link as={Link} to="/orders">Past Orders</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavigationBar;

