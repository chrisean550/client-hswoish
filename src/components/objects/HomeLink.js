import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
export default function HomeLink() {
    return (
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
            <Navbar.Brand className='lg-text cust-nav cust-nav-item'>
                Hannah Swoish
            </Navbar.Brand>
        </Link>

    )
}
