import React from 'react'
// import Home from './About'
import Navbar from './Navbar'

function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className="name">
            <h1><span>Cryptocurrency Basics:</span> A Beginner’s Guide</h1>
            <p className="details">Cryptocurrency has been called everything from the money of the future to an extremely risky asset that shouldn’t be touched with a 10-foot pole.</p>

            {/* <a href="#" className="cv-btn">Download</a> */}
            
            </div>
            
        </div>
    )
}

export default Header
