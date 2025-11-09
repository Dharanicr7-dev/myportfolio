import React from 'react'
import './footer.css'
import footerlogo from '../../assets/dd.png'
import usericon from '../../assets/usericon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className="footer-top">
                {/* <img src={footerlogo} alt="" /> */}
            </div>
            {/* <hr /> */}
            <div className='footer-bottom'>
                <div className='footer-bottom-left'>
                    <p>© 2025 Dharanidharan. All rights reserved.</p>
                </div>
            </div>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
                
            
        </div>

    </div>
  )
}

export default Footer