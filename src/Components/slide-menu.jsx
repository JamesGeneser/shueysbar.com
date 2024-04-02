import React from 'react'
import { Component } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShueysLogo from '../images/ShueysLogo.png';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import HamburgerButton from '../images/HamburgerButton.svg'
import { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function SlideMenu() {

        const [visible, setVisible] = useState(false)

        const toggleVisibility = () => {
            setVisible(!visible)
        }

        let menuRef = useRef()
        useEffect(() => {
            let handler = (e) => {
                if(!menuRef.current.contains(e.target)){
                    setVisible(false)
                }
               
            }
            document.addEventListener('mousedown', handler)
        })


    return(
        <>

        <button onClick={toggleVisibility} className="d-sm-block d-md-none">
            <img src={HamburgerButton}/>
        </button>
   
                    <Container ref={menuRef}  className={`slide-menu-container bebas text-center d-flex flex-column d-sm-block d-md-none ${visible? "slide-menu-open":"slide-menu-closed"}`}>
                        <div className='d-flex flex-column'>
                        <img src={ShueysLogo} className="slide-menu-logo" alt='Shueys logo'/>

                            <Link className="slide-navigation-item"  as={NavLink} to="Shueys-Bar/">Home</Link>
                            <Link className="slide-navigation-item"  as={NavLink} to="Shueys-Bar/menu">Menu</Link>
                            <Link className="slide-navigation-item"  as={NavLink} to="Shueys-Bar/contact">Contact</Link>
                            <Link className="slide-navigation-item"  as={NavLink} to="Shueys-Bar/about">About</Link>
                            <Link className="slide-navigation-item"  as={NavLink} to="Shueys-Bar/apply">Apply</Link>
                        </div>


                    </Container>


                   
                    
        
                
                </>
    )
}




