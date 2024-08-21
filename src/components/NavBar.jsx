import React, { useEffect, useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import axios from '../http';

import DataSourceContext from '../context/Source.Context';

import { Navbar, Nav, Dropdown } from 'react-bootstrap';

import Brandlogo from '../svg/Brandlogo.svg';

const NavBar = () => {
  const { state, dispatch } = useContext(DataSourceContext);

  const location = useLocation();
  const navigate = useNavigate();

  const checkUser = async () => {
    try {
      const response = await axios.get("/api/user/check");
      if (response.status !== 200) {
        throw new Error("User Not verified")
      }
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  useEffect(() => {
    checkUser();
  }, [navigate])

  const handleLogOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("/api/user/logout");
      if (response.status === 200) {
        dispatch({ type: "CLEAR" })
        navigate('/');
      }
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  const getActiveKey = (pathname) => {
    const segments = pathname.split('/');
    return (`/${segments[1]}`)
  };

  const activePath = getActiveKey(location.pathname)

  return (
    <>
      <Navbar className="border-bottom p-0">
        <div className='container ms-4'>

          <Navbar.Brand href="/">
            <img src={Brandlogo} alt='LLMBOXX' className='Brand-logo' />
          </Navbar.Brand>

          <Nav variant="tabs" activeKey={activePath}>
            <Nav.Item>
              <Nav.Link href="/data" className={`border-3 text-uppercase`}>DATA</Nav.Link>
            </Nav.Item>
            {state.type === 'structured' ?
              <></>
              :
              <>
                <Nav.Item>
                  <Nav.Link href="/model" className={`border-3 text-uppercase`}>MODEL</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/processing" className={`border-3 text-uppercase`}>PROCESSING</Nav.Link>
                </Nav.Item>
              </>
            }
            <Nav.Item>
              <Nav.Link href="/inference" className={`border-3 text-uppercase`}>INFERENCE</Nav.Link>
            </Nav.Item>
          </Nav>

        </div>

        <Dropdown className='me-5'>
          <Dropdown.Toggle variant='none' id="dropdown-basic" className=''>
            <p className='d-inline me-5'>Account</p>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item >Action 1</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Navbar>

      <Outlet />
    </>
  )
}

export default NavBar;