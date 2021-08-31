import React, {useEffect} from 'react'
import headshot from '../../imgs/headshot.jpg'
import NavBar from '../objects/NavBar'
import $ from 'jquery'


export default function About() {
    useEffect(()=>{
        $(".slide-left").animate({opacity:"1", left:"0px"}, 500)
        $(".slide-right").animate({opacity:"1", right:"0px"}, 500)
        
    })

    return (
        <>
            <NavBar/>
            <div className="main-section">
                <div className="d-flex flex-wrap flex-row align-items-center justify-content-center">
                    <div className="main-img-container">
                        <img src={headshot} className="invisible" alt="" />
                        <img src={headshot} className="main-img" alt="" />
                    </div>
                    <div className="slide-right about-bio-container">
                        <p className="sm-text">
                        Hi! My name is Hannah. I grew up in Atlanta, GA but have been calling Pittsburgh, PA my home for the last 3 years after deciding to pursue my college career at the University of Pittsburgh. I am a self-taught artist and mainly work with acrylics and charcoals. More recently, I’ve taken a dive into the world of ‘fluid acrylics’ and have been loving experimenting with various pouring mediums/techniques.
                        <br/><br/>
                        Art is where I feel the most comfortable to express who I am and to let go of any stress or anxiety I am feeling in the moment. When I start a piece, I disconnect from the world and immerse myself into the body of work. Although I prefer to leave the interpretation of my artwork up to the viewer, I do tend to see a lot of my own emotion poured out onto the piece.
                        <br/><br/>
                        That being said, my art is an extension of myself. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
