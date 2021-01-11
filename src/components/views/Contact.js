import React from 'react'
import ContactForm from '../forms/ContactForm'
import img from '../../imgs/IMG_2843.jpg'
import NavBar from '../objects/NavBar'

export default function Contact() {
    return (
        <>
            <NavBar/>
            <div className="main-section">
                <div className="d-flex flex-wrap flex-row align-items-center justify-content-around">
                    <ContactForm/>
                    <div className="main-img-container mt-3">
                        <img src={img} className="invisible" alt="" />
                        <img src={img} className="main-img" alt="" />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center p-3">
                    <a href="https://www.instagram.com/michel.han.gelo/" style={{color: 'inherit', textDecoration: 'inherit'}}>
                        <i  className="fa fa-instagram" aria-hidden="true"/>
                    </a>
                    
                </div>
                
            </div>
        </>
    )
}
