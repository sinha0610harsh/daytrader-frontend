import React from 'react'
import footerImage from '../../../assets/copyRight.gif'
import './Footer.css'

const Footer = () => {
  return (
    <div className='app-footer-container'>
      <div className='app-footer-content'>
        <img className='footer-image' src={footerImage} />
      </div>
    </div>
  )
}

export default Footer;
