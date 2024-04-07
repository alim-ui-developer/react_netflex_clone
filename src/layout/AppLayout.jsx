import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import './AppLayout.style.css';
import logo  from '../assets/theMoviesLogo.png'

const AppLayout = () => {
  return (
    <div className='appLayout'>
      <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
        <Container fluid>
          <h1 className='logo'>
            <Link to='/'>
              <img src={logo} alt="The Movies" />
            </Link>
          </h1>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="what do you want?"
                className="me-2"
                aria-label="Search"
              />
              <Button>검색</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* react ver.6부터 추가된 Outlet은 router안에 있는 자손들을 갖고 오도록 도와준다 */}
      <Outlet />
    </div>
  );
}

export default AppLayout