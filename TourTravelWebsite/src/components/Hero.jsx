import React from 'react'
import './hero.styles.css'
function Hero(props) {
  return (
    <div className={props.className}>
        <img src={props.heroImg} alt="Hero Image" />
        <div className="hero-text">
            <h1>
                {props.title }
            </h1>
            <p>
                {props.description }
            </p>
            <a href={props.url} className={props.btnClass}>{props.btnText}</a>
        </div>
    </div>
  )
}

export default Hero