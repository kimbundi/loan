import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""  className='logo'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti beatae eum cupiditate quo sed maiores illum. Ex aliquam temporibus odio!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Loan products</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>0745517657</li>
                    <li>contact</li>

                </ul>
            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">copyright 2025  &copy;
        -All Right Reserved.</p>

    </div>
  )
}

export default Footer