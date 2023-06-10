import React from 'react'
import Input from './Input'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'



const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>

        <div className='quick-links-container'>
          <ul className='quick-links'>
              <li className='links'>Home</li>
              <li className='links'>Services</li>
              <li className='links'>Our Works</li>
              <li className='links'>Clients</li>
              <li className='links'>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className='footer-logo'>Edie</h1>
          <div className='socialmedia-links'>
            <FaInstagram />
            <FaLinkedin />
            <FaTwitterSquare />
          </div>
        </div>

        <Input />
      </div>
      
      <p className='foot-text'>created by 25Emmanuel - devChallenges.io</p>
    </footer>
  )
}

export default Footer
