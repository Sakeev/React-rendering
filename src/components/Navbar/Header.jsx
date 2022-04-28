import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto d-flex justify-content-evenly">
      <NavLink to='/'>
      <Nav.Item className='m-3'>Home</Nav.Item>
      </NavLink>

      <NavLink to='/counter'>
      <Nav.Item className='m-3'>Counter</Nav.Item>
      </NavLink>

      <NavLink to='/receipts'>
      <Nav.Item className='m-3'>Receipts</Nav.Item>
      </NavLink>

      <NavLink to='/contacts'>
      <Nav.Item className='m-3'>Contact list</Nav.Item>
      </NavLink>

      <NavLink to='/login'>
      <Nav.Item className='m-3'>Log in</Nav.Item>
      </NavLink>

    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;