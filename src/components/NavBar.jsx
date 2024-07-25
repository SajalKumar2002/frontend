import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Navbar, Nav, Dropdown } from 'react-bootstrap';

import Brandlogo from '../svg/Brandlogo.svg';

const NavBar = () => {
  const location = useLocation();
  const redirect = useNavigate();

  const tabs =
    [
      { name: "data" },
      { name: "model" },
      { name: "processing" },
      { name: "inference" },
    ];

  const HandleLogOut = (event) => {
    event.preventDefault();

    redirect('/')
  }

  

  const getActiveKey = (pathname) => {
    const nextSlashIndex = pathname.indexOf('/', 1);
    return nextSlashIndex !== -1 ? pathname.substring(0, nextSlashIndex) : pathname;
  };

  return (
    <>
      <Navbar className="border-bottom  p-0">
        <div className='container ms-4'>

          <Navbar.Brand href="/">
            <img src={Brandlogo} alt='LLMBOXx' className='Brand-logo' />
          </Navbar.Brand>

          <Nav variant="tabs" activeKey={getActiveKey(location.pathname)}>
            {tabs.map((tab) => (
              <Nav.Item>
                <Nav.Link href={`/${tab.name}`} className={`border-3 text-uppercase `}>{tab.name}</Nav.Link>
              </Nav.Item>
            ))}
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