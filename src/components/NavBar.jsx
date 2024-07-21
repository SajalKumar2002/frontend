import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

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
    <>
      <Navbar className="border-bottom  p-0">
        <div className='container ms-4'>
          <Navbar.Brand href="/">
            <img src={Brandlogo} alt='LLMBOXx' className='Brand-logo' />
          </Navbar.Brand>

          <Nav variant="tabs" activeKey={location.pathname}>
            <Nav.Item>
              <Nav.Link href="/source" className='border-3'>DATA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/model' className='border-3'>MODEL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/processing' className='border-3'>PROCESSING</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/inference' className='border-3'>INFERENCE</Nav.Link>
            </Nav.Item>
          </Nav>

        </div>
        <Dropdown className='me-5'>
          <Dropdown.Toggle variant='none' id="dropdown-basic" className=''>
            <p className='d-inline me-5'>Admin</p>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item >Action 1</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={HandleLogOut}>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
      <Outlet />
    </>
  )
}

export default NavBar;