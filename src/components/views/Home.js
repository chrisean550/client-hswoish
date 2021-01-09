import React from 'react'
import '../objects/HomeLink'
import HomeLink from '../objects/HomeLink'
import Navigation from '../objects/Navigation'
import img from '../../imgs/IMG_5173.jpg'

export default function Home() {
    return (
        <div className="d-flex flex-column align-items-center">
            <HomeLink/>
            <Navigation/>
            <img src={img} className="home-img" alt="" ></img>
        </div>
    )
}
