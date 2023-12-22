import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#" style={{ fontFamily: 'Courier New, Courier, monospace', fontWeight: 600 }}>
                <span>NYAAY SAHAAYAK-A LEGAL ASSISTANT</span><br />
                <span></span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" className="nav-link active">Home</Nav.Link>
                   <Link to={""}> <Nav.Link as={Link} to="/Categories" className="nav-link active">Categories</Nav.Link></Link>
                    <Nav.Link as={Link} to="/Aboutus" className="nav-link active">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/Contactus" className="nav-link active">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/Chatbot" className="nav-link active">Chatbot</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/know-your-rights">&gt; Know Your Rights</NavDropdown.Item>
                        <NavDropdown.Item href="/using-our-website">&gt; Using our website</NavDropdown.Item>
                        <NavDropdown.Item href="/faqs">&gt; FAQs</NavDropdown.Item>
                        
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;