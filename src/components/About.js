import React from 'react'

function Home(props) {
    return (
        <div id="about">
        <div className="about-image">
        <img src={props.image} alt=""/>
        </div>
        <div className="about-text">
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>

        <button>{props.button}</button>
        </div>
        
        </div>
    )
}

export default Home
