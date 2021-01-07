import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const NavBar =()=>{
    return(
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Navbar.Brand href="#home">Weather Forecast</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar;