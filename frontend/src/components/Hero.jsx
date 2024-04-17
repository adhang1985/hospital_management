/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Hero = (props) => {
  return (
    <div className='hero container'>
        <div className="banner">
            <h1>{props.title}</h1>
            <p>
            Adriti Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. 
            We prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
            </p>
        </div>
        <div className="banner">
            <img src={props.imageUrl} alt="hero-image" className='animated-image'/>
            <span>
                <img src="/Vector.png" alt="vector" />
            </span>
        </div>
    </div>
  )
}

export default Hero