import React from "react";
import {link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

const NavigationBar = ()=>{
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={link} to="/">
                Cobweb Weaver Restaurent
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={link} to="/">Home</Nav.Link>
                    <Nav.Link as={link} to="/cart">Cart</Nav.Link>
                    <Nav.Link as={link} to="/orders">Past Orders</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavigationBar;

