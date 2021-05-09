import React from 'react'
import logoMin from '../images/logo-min.jpeg'

const Hero = () => {

    return (
        <>
            <header className="header container">
                <nav className="nav">
                    <div className="nav__logo">
                        <img src={logoMin} alt="logo" />
                    </div>
                    <ul className="nav__links">
                        <li><a href="/">home</a></li>
                        <li><a href="/">contact</a></li>
                        <li><a href="/">about</a></li>
                    </ul>
                </nav>
            </header>
            <section className="banner">
                <div className="banner__title">
                    <h1>tokyo</h1>
                    <h1>chronos</h1>
                </div>
                <div className="banner__subtitle container">
                    <p>I am dead. Who killed me?</p>
                </div>
            </section>
        </>
    )
}

export default Hero
