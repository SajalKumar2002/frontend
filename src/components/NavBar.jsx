import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Navbar, Container, Nav, Dropdown, ButtonGroup, Button } from 'react-bootstrap';

import Brandlogo from '../svg/Brandlogo.svg';

const NavBar = () => {
  const location = useLocation();
  const redirect = useNavigate();

  const HandleLogOut = (event) => {
    event.preventDefault();
    redirect('/')
  }

  return (
    <Navbar className="border-bottom">
      <Container className=''>
        <Navbar.Brand href="/">
          <img src={Brandlogo} alt='LLMBOXx' className='Brand-logo' />
        </Navbar.Brand>

        <div className="d-flex">
          <Nav variant="tabs" activeKey={location.pathname} className='border-dark'>
            <Nav.Item>
              <Nav.Link className='border' href="/data">DATA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/model'>MODEL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/processing'>PROCESSING</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/inference'>INFERENCE</Nav.Link>
            </Nav.Item>
          </Nav>

          <Dropdown as={ButtonGroup} className='ms-3'>
            <Button variant="light">Account</Button>

            <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="/">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar