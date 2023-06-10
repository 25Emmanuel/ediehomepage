import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'><a href='/'>Edie</a></h1>
      <div className='menu-links'>
        <ul>
          <li className='links'><a href="/">Home</a></li>
          <li className='links'><a href="/services">Services</a></li>
          <li className='links'><a href="/works">Our Works</a></li>
          <li className='links'><a href="/clients">Clients</a></li>
          <li className='links'><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className='menu-container'>
        &#9776;
      </div>
    </nav>
  )
}

export default Nav
