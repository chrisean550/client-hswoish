import React, {useEffect} from 'react'
import headshot from '../../imgs/headshot.jpg'
import NavBar from '../objects/NavBar'
import $ from 'jquery'


export default function About() {
    useEffect(()=>{
        $(".slide-left").animate({opacity:"1", left:"0px"}, 1500)
        $(".slide-right").animate({opacity:"1", right:"0px"}, 1500)
        
    })

    return (
        <>
            <NavBar/>
            <div className="main-section">
                <div className="d-flex flex-wrap flex-row align-items-center justify-content-center">
                    <div className="slide-left main-img-container">
                        <img src={headshot} className="invisible" alt="" />
                        <img src={headshot} className="main-img" alt="" />
                    </div>
                    <div className="slide-right about-bio-container">
                        <p className="md-text">
                            Hi! My name is Hannah, you can call me Han too. I grew up 
                            in Atlanta, GA but have been calling Pittsburgh my home for
                            the last 3 years after deciding to pursue my college career
                             at the University of Pittsburgh. I am a self-taught artist
                            and mainly work with acrylics and charcoals. I’d say a lot
                            of my art content revolves around a sense of bringing an
                            emotion to life. When I put a brush onto canvas or a pencil
                            onto paper, I fully immerse myself into the body of work and
                            thus usually see a lot of my emotion poured out onto the piece.
                            Art is where I feel comfortable to express who I am. My art is an
                            extension of myself.
                            
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
