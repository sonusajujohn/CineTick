import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
    <footer>
    <div className="footer" id='Aboutus'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img style={{width:"60px",height:"60px"}} src={assets.favicon} alt="" />
                <p style={{textAlign:"justify"}}>Stay updated with us for the latest releases, find the perfect spot, and let the movie magic begin—all in just a few clicks.</p>
                <div className="footer-social-icons">
                    <img src={assets.whatsapp} alt="whatsapplogo" />
                    <img src={assets.facebook}  alt="facebooklogo" />
                    <img src={assets.twitter} alt="twitterlogo" />
                    <img src={assets.linkedin} alt="linkedinlogo" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9567992613</li>
                    <li>Contact@CineTick.com</li>
                </ul>
            </div>
            <hr />
            <p className="footer-copyright" >
                Copyright 2024 @ CineTick.com - All Right Reserved.
            </p>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer