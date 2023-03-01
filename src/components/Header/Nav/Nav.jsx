import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navb = () => {
  return <Navbar bg="light" variant="light">
 <Container>
   <Navbar.Brand href="#home"></Navbar.Brand>
   <Nav className="me-auto">
   <Link to="/">Home</Link>
   <Link to="/new">New</Link>
   <Link to="/search">Search</Link>
   </Nav>
 
 </Container>
 </Navbar>
};

export default Navb;
