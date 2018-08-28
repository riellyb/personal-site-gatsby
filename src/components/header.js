import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (

  <header className="header">
    <nav className="main-nav fixed">
      <div className="sitename">
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </div>
      <ul>
        <li className="main-nav-item"><a href="#about">About</a></li>
        <li className="main-nav-item"><a href="#work">Work</a></li>
        <li className="main-nav-item"><a href="#photos">Photos</a></li>
        <li className="main-nav-item"><a href="#contact" className="nav-active">Contact</a></li>
    </ul>
    </nav>
  </header>
  
)

export default Header
