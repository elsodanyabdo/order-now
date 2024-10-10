// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <footer>
            <div className="content" id="footer">
                <div className="left">
                    <img className="footer-logo" src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit corrupti magni error, ducimus nihil laboriosam quos quo animi non soluta placeat consequatur culpa vero quod eveniet, sed ut libero dolores dolorum illo doloremque assumenda recusandae aperiam. Quas laboriosam vero minus!</p>
                    <div className="icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="center">
                    <h2>Company</h2>
                    <ul>
                        <li>home</li>
                        <li>about us</li>
                        <li>delivery</li>
                        <li>privacy police</li>
                    </ul>
                </div>
                <div className="right">
                    <h2>get in touch</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomoto.com</li>
                    </ul>
                </div>
            </div>
            < hr />
            <p className="footer-copy-right">
                copyright 2024 &copy; tomato.com - all right reserved
            </p>
        </footer>
    )
}

export default Footer