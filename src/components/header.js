import React, { useState } from "react"
import { Link } from "gatsby"
import NavLinks from '@components/navLinks'
import { Hamburger, Times, Logo } from '@images/icons'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Header = () => {
  const [isOpen, toggleNav] = useState(false)

  return (
    <header className="header">
      <div className="wrapper header__nav-container">

      
  
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
  
        <button 
          id="nav-toggle"
          onClick={() => toggleNav(!isOpen)}
        >
          <span className={!isOpen ? 'show' : ''}>
            <Hamburger />
          </span>

          <span className={isOpen ? 'show' : ''}>
            <Times />
          </span>
        </button>
  
        <nav className={isOpen ? 'header__nav open' : 'header__nav'}>
          <NavLinks specialClass='header__nav-list' />
        </nav>

        <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
  
      </div>
    </header>
  )
}

export default Header
