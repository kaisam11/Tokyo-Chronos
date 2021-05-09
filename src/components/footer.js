import React from 'react'
import logo from '../images/logo.png'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import reddit from '../images/reddit.svg'

const Footer = ({onCursor}) => {
    return (
        <>
            <footer className="footer">
                <img className='logo' src={logo} alt="logo" />
                <p>follow us on</p>
                <div className="social">
                    <img src={facebook} alt="facebook" onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}/>
                    <img src={twitter} alt="twitter" onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}/>
                    <img src={instagram} alt="instagram" onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}/>
                    <img src={reddit} alt="reddit" onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}/>
                </div>
                <p>made with love by <a href="/" onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}>@kaisam</a></p>
            </footer>   
        </>
    )
}

export default Footer
