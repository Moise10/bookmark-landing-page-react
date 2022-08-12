import React from 'react'
import './Header.css'
import {ReactComponent as Logo} from '../../images/logo-bookmark.svg'

function Header() {
  return (
    <div className="header_container">
      <header>
        <div className="header__logo">
          <Logo />
        </div>
        <nav className="header__nav">
          <ul className="header__links">
            <li className="header__links--tag"><a href="#" className="li">Features</a></li>
            <li className="header__links--tag"><a href="#" className="li">Pricing</a></li>
            <li className="header__links--tag"><a href="#" className="li">Contact</a></li>
            <li className="header__links--tag"><a href="#" className="li">Login</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header