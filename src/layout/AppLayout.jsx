import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Form, Nav, Navbar}  from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './AppLayout.style.css';
import logo  from '../assets/theMoviesLogo.png'

const AppLayout = () => {
  return (
    <>
      <Container fluid className='appLayout'>
        <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
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
                placeholder="we love movie!"
                className="me-2"
                aria-label="Search"
              />
              <Button>검색</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      {/* react ver.6부터 추가된 Outlet은 router안에 있는 자손들을 갖고 오도록 도와준다 */}
      <Outlet />
      <footer>
        <address>&copy; The Movies 2024 All rights reserved.</address>
      </footer>
    </>
  );
}

export default AppLayout