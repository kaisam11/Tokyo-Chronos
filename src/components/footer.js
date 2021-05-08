import React from 'react'
import logo from '../images/logo.png'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import reddit from '../images/reddit.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <img className='logo' src={logo} alt="logo" />
                <p>follow us on</p>
                <div className="social">
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                    <img src={reddit} alt="reddit" />
                </div>
                <p>made with love by <a href="/">@kaisam</a></p>
            </footer>   
        </>
    )
}

export default Footer
