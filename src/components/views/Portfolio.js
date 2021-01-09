import React, { useEffect } from 'react'
import HomeLink from '../objects/HomeLink'
import Navigation from '../objects/Navigation'
import gallery from '../../gallery.json'
export default function Portfolio() {
    useEffect(() => {
        loadImgs()
    })

    return (
        <>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <HomeLink />
                <Navigation turnButton={true} />
            </div>
            <div className="portfolio-section d-flex flex-row flex-wrap justify-content-center">
                <div id="gallery-col-1" className="d-flex flex-column" />
                <div id="gallery-col-2" className="d-flex flex-column" />
                <div id="gallery-col-3" className="d-flex flex-column" />
                <div id="gallery-col-4" className="d-flex flex-column" />
            </div>


        </>
    )
}

//Loads the images from the json file into the page
const loadImgs = () => {
    const col1 = document.getElementById('gallery-col-1')
    const col2 = document.getElementById('gallery-col-2')
    const col3 = document.getElementById('gallery-col-3')
    const col4 = document.getElementById('gallery-col-4')
    var next = 0
    let node


    for (var i = 0; i < gallery.imgPath.length; i++) {
        if (next === 0) {
            node = `<img src=${gallery.imgPath[i]} class="portfolio-img" alt="" />`
            col1.innerHTML += node
            next = 1
        }
        else if (next === 1) {
            node = `<img src=${gallery.imgPath[i]} class="portfolio-img" alt="" />`
            col2.innerHTML += node
            next = 2
        }
        else if (next === 2) {
            node = `<img src=${gallery.imgPath[i]} class="portfolio-img" alt="" />`
            col3.innerHTML += node
            next = 3
        }
        else if (next === 3) {
            node = `<img src=${gallery.imgPath[i]} class="portfolio-img" alt="" />`
            col4.innerHTML += node
            next = 0
        }
    }
}
