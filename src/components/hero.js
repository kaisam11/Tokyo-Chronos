import React from 'react'
import { useGlobalStateContext } from '../context/globalContext'
import logoMin from '../images/logo-min.jpeg'
import home from '../images/home.svg'
import contact from '../images/call.svg'
import about from '../images/info.svg'

const Hero = ({onCursor}) => {

    return (
        <>
            <header className="header container">
                <nav className="nav">
                    <div className="nav__logo">
                        <img onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} src={logoMin} alt="logo" />
                    </div>
                    <ul className="nav__links">
                        <li onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}><a href="/">home</a></li>
                        <li onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}><a href="/">contact</a></li>
                        <li onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}><a href="/">about</a></li>
                        <img onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} src={home} alt="" />
                        <img onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} src={contact} alt="" />
                        <img onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")} src={about} alt="" />
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
