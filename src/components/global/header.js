import React, { useState } from "react"
import { Link } from "gatsby"
import { Hamburger, Times, Logo } from '@images/icons'

import styled, { css } from "styled-components"
import { Container } from "@styles"

const Header = ({ isDark, themeContext }) => {
  const [isOpen, toggleNav] = useState(false)

  return (
    <SiteHeader>
      <NavContainer wrapper>
  
        <LogoLink to="/">
          <Logo />
        </LogoLink>
  
        <NavToggle 
          id="nav-toggle"
          onClick={() => toggleNav(!isOpen)}
        >
          {isOpen ? <Times /> : <Hamburger />}
        </NavToggle>
  
        <Nav isOpen={isOpen}>

          <NavLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/examples">Examples</Link>
            </li>
            <li>
              <Link to="/">Page</Link>
            </li>
            <li>
              <Link to="/">Page</Link>
            </li>
            <li>
              <Link to="/">Page</Link>
            </li>
          </NavLinks>

          <button 
            onClick={() => themeContext.toggleDark()}
            aria-label="toggle dark mode"
          >
            {/* {isDark ? <Sun /> : <Moon />} */}
            {isDark ? 'sun' : 'moon'}
          </button>

        </Nav>
  
      </NavContainer>
    </SiteHeader>
  )
}

export default Header

const SiteHeader = styled.header`
  background-color: var(--color-bg);

  // positioning
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;

`
const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavToggle = styled.button`
  display: none;
  
  @media screen and (max-width: 900px) {
    display: block;
    // overwrite default button styles
    border: none;
    padding: 1rem;
    line-height: 1;
    background-color: transparent;
    
    // positioning
    display: block;
    position: relative;
    z-index: 1000;
  }
`

const LogoLink = styled(Link)`
  padding: .8rem 0;
  position: relative;
  z-index: 1000;

  svg {
    fill: var(--color-text);
    width: 100%;
    max-width: 15rem;
    display: block;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    background-color: var(--color-bg);
    // positioning
    position: absolute;
    top:0; left:0; right: 0;
    min-height: 100vh;

    // flex
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // transition set up
    opacity: 0;
    visibility: hidden;
    transition: opacity .2s;

    // set up styles before transition
    li {
      opacity: 0;
      transform: translateY(1rem);
    }

    ${props => props.isOpen && css`
      opacity: 1;
      visibility: visible;
    
      // needs to be kept here due to parent props
      li {
        transform: translateY(0);
        opacity: 1;
        transition: opacity .2s, transform .2s;

        &:nth-child(1) { transition-delay: .1s;}
        &:nth-child(2) { transition-delay: .15s;}
        &:nth-child(3) { transition-delay: .2s;}
        &:nth-child(4) { transition-delay: .25s;}
        &:nth-child(5) { transition-delay: .3s;}
      }
    `} // end of isOpen
  }
`

const NavLinks = styled.ul`
  display: flex;

  li { 
    margin-right: 2.8rem;
  }
  a {
    color: var(--color-text);
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    font-size: 2.4rem;
  
    li {
      margin-right: 0;
      margin-bottom: 1.8rem;
    }
  
    a { 
      padding: .4rem .8rem;
    }
  }
`