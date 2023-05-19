import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../../assets/logo.webp'
import { Link, NavLink } from 'react-router-dom';

function Navmenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#"><img width='120' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='nav-link active' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/addtoy'>Add Toy</NavLink>
            <NavLink className='nav-link' to='/alltoy'>All Toy</NavLink>
            <NavLink className='nav-link' to='/login'>Log In</NavLink>
            
           
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navmenu