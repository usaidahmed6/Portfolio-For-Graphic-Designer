import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../style/Header.css';
import logo from "../images/logo.png";


const Header = () => {

  return (

    <Navbar expand="lg" className='Header-Menu'>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} className="logo menu-Item " /><i className="fas fa-utensils "></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

            <Nav className='mx-4 menu-Item'>

              <a href="#About">
                About Me
              </a>

            </Nav>

            <Nav className='mx-4 menu-Item'>

              <a href="#MyServices">
                My Services
              </a>

            </Nav>

            <Nav className='mx-4 menu-Item'>

              <a href="#MyWorks">
              My Works
              </a>

            </Nav>

            <Nav className='mx-4 menu-Item'>

              <a href="#Skills-Tools">
              Skills & Tools
              </a>

            </Nav>

            <Nav className='mx-4 menu-Item'>
              
              <a href="#WorkExperience">
              Work Experience
              </a>

            </Nav>

          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>



  )
}

export default Header