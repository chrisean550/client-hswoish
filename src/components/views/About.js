import React from 'react'
import headshot from '../../imgs/headshot.jpg'
import NavBar from '../objects/NavBar'

export default function About() {
    return (
        <>
            <NavBar/>
            <div className="main-section">
                <div className="d-flex flex-wrap flex-row align-items-center justify-content-center">
                    <div className="main-img-container">
                        <img src={headshot} className="invisible" alt="" />
                        <img src={headshot} className="main-img" alt="" />
                    </div>
                    <div className="about-bio-container">
                        <p className="md-text">
                            Lrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Proin fermentum
                            leo vel orci porta non pulvinar neque. Nulla facilisi morbi tempus
                            iaculis urna id volutpat lacus laoreet. Convallis a cras semper auctor
                            neque vitae. Mattis pellentesque id nibh tortor id aliquet lectus
                            proin. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla
                            facilisi. Dignissim convallis aenean et tortor at risus viverra.
                            Eget nullam non nisi est sit amet facilisis magna etiam. Turpis
                            egestas pretium aenean pharetra magna ac placerat. Ornare lectus
                            sit amet est placerat in egestas.
                            
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
