import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
    //display toggle
    const toggleDisplay = (show) => {
        if (show) {
            document.getElementById('nav-overlay').style.display = 'block'
        }
        else {
            document.getElementById('nav-overlay').style.display = 'none'
        }
    }

    // responsible for setting the correct display verion of the navbar
    let display
    if (props.turnButton && document.body.clientWidth < 1250) {
        display =
            <>
                <i className="fa fa-bars cust-nav" onClick={() => toggleDisplay(true)} />
                <div id="nav-overlay" className="cust-nav-overlay">
                    <Navbar className="flex-column justify-content-center md-text cust-nav h-100">
                        <i className="fa fa-times overlay-exit" onClick={() => toggleDisplay(false)} />
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/portfolio">
                            <Nav.Item className="cust-nav-item">PORTFOLIO</Nav.Item>
                        </Link>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/about">
                            <Nav.Item className="cust-nav-item">ABOUT</Nav.Item>
                        </Link>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/contact">
                            <Nav.Item className="cust-nav-item">CONTACT</Nav.Item>
                        </Link>
                    </Navbar>
                </div>
            </>
    } else {
        display =
            <Navbar className="flex-row flex-wrap justify-content-around w-50 md-text cust-nav">
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/portfolio">
                    <Nav.Item className="cust-nav-item">PORTFOLIO</Nav.Item>
                </Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/about">
                    <Nav.Item className="cust-nav-item">ABOUT</Nav.Item>
                </Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/contact">
                    <Nav.Item className="cust-nav-item">CONTACT</Nav.Item>
                </Link>
            </Navbar>


    }




    return display
}
