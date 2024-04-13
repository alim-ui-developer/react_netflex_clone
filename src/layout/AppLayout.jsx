import React, {useState} from 'react';
import Container from '@mui/material/Container';
import { Button, Form, Nav, Navbar}  from 'react-bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './AppLayout.style.css';
import logo  from '../assets/theMoviesLogo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AppLayout = () => {
  const [ keyword, setKeyword ] = useState('');
  const navigate = useNavigate();
  
  const searchByKeyword = (evnet) => {
    evnet.preventDefault();
    // url 바꿔주기
    navigate(`/movies?q=${keyword}`);
    // 검색 결과 나온 후 검색창 입력 값 비우기
    setKeyword("");
  }

  return (
    <section className='appLayout'>
      <Navbar expand="lg" fixed="top" data-bs-theme="dark" className="bg-body-tertiary">
        <Container maxWidth="xl" className='navbar-expand-lg'>
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
              {/* <Nav.Link href="movies">Movies</Nav.Link> */}
              <Link to='/movies'>Movies</Link>
            </Nav>
            <Form className="searchBox" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="we love movie!"
                className="me-2"
                aria-label="Search"
                value={ keyword }
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* react ver.6부터 추가된 Outlet은 router안에 있는 자손들을 갖고 오도록 도와준다 */}
      <Outlet />
      <footer>
        <address>&copy; The Movies 2024 All rights reserved.</address>
      </footer>
    </section>
  );
}

export default AppLayout