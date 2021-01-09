import React from 'react'
import HomeLink from '../objects/HomeLink'
import Navigation from '../objects/Navigation'
import ContactForm from '../forms/ContactForm'
import img from '../../imgs/IMG_2843.jpg'

export default function Contact() {
    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <HomeLink />
                <Navigation turnButton={true} />
            </div>
            <div className="main-section">
                <div className="d-flex flex-wrap flex-row align-items-center justify-content-around">
                    <ContactForm/>
                    <div className="main-img-container mt-3">
                        <img src={img} className="invisible" alt="" />
                        <img src={img} className="main-img" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
