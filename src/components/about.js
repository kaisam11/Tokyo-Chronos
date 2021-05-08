import React from 'react'
import psVR from '../images/psVR.png'
import oculus from '../images/oculus.jpg'
import steamVR from '../images/steamVR.png'

const About = () => {
    return (
        <>
            <section className="about">
                <div className="about__logo container">
                    <img src={psVR} alt="psVR" />
                    <img src={oculus} alt="oculus" />
                    <img src={steamVR} alt="steamVR" />
                </div>
                <div className="about__text container">
                    <p>TOKYO CHRONOS is the VR game that has multiple-choice decision points as well as more than one ending. It has a long story you’ve never experienced before with VR. The game takes place in Shibuya, Tokyo, which has only eight people, including you, the protagonist, Kyosuke Sakurai.</p>
                    <button className="btn">read more</button>
                </div>
            </section>

        </>
    )
}

export default About
