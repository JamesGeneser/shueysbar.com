import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import SlideMenu from "./slide-menu";
import { useState } from 'react';

import ShueysLogo from '../images/ShueysLogo.png';
import FacebookLogo from '../images/FacebookLogo.svg'
import HamburgerButton from '../images/HamburgerButton.png'


function Navigation() {


  return (
    <>
    <Navbar   className="p-3 mt-0 pt-0 py-0 d-flex"> 
      <Container fluid className="navigation-container mt-auto">


      <Row className="nav-row d-flex justify-content-between">
   
          <Col xs={6} sm={4} md={3} lg={3} className="shueys-column">
            <img src={ShueysLogo} alt="Shueys Logo" className="image shueys-logo  mt-0 "/>  
          </Col>

          <Col xs={2} sm={1} className=" d-sm-block d-md-none mt-auto pb-2 text-center">
            <a href="https://www.facebook.com/shueysrestaurant/"><img src={FacebookLogo} alt="Facebook Logo" className=""/> </a>
          </Col>

          <Col md={6} lg={8} className="mt-auto mb-0 d-none d-md-block bebas"> 
     
            <Link className="navigation-item"  to="/">Home</Link>
            <Link className="navigation-item"  to="/menu">Menu</Link>
            <Link className="navigation-item"  to="/contact">Contact</Link>
            <Link className="navigation-item"  to="/about">About</Link>
            <Link className="navigation-item"  to="/apply">Apply</Link>


          
          </Col>

          <Col  md={2} lg={1} className="d-none d-md-block mt-auto pb-3">
            <a className="d-flex justify-content-end" href="https://www.facebook.com/shueysrestaurant/"><img src={FacebookLogo} alt="Facebook Logo" className=""/> </a>
          </Col>

          <Col xs={2} sm={4} md={4} className="mt-auto d-flex align-items-end  ms-4 d-sm-block d-md-none">
          <SlideMenu />
          </Col>
              
 
             
        

      </Row>
        
   
      </Container>
      
    </Navbar>
    <Outlet/>
</>
  );
}

export default Navigation;
