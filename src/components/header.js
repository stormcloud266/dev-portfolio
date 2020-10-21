import React, { useState } from "react"
import { Link } from "gatsby"
import NavLinks from '@components/navLinks'
import { Hamburger, Times, Logo } from '@images/icons'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import styled, { css } from "styled-components"
import { Container } from "../styles/container"

const Header = () => {
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
          <NavLinks specialClass='header__nav-list' />

          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label>
                <input
                  type="checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                />
                Dark mode
              </label>
            )}
          </ThemeToggler>

        </Nav>
  
      </NavContainer>
    </SiteHeader>
  )
}

export default Header

const SiteHeader = styled.header`
  background-color: #d7e5e6;

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
    fill: $color-text-1;
    width: 100%;
    max-width: 15rem;
    display: block;
  }
`

const Nav = styled.nav`
  display: flex;

  li { 
    margin-left: 2.8rem;
  }
  ul {
    display: flex;
  }

  @media screen and (max-width: 900px) {
    background-color: #d7e5e6;

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

    ul {
      flex-direction: column;
      align-items: center;
      font-size: 2.4rem;
    }

    li {
      margin-left: 0;
      margin-bottom: 1.8rem;
      opacity: 0;
      transform: translateY(1rem);
    }

    a { padding: .4rem .8rem; }

    ${props => props.isOpen && css`
      opacity: 1;
      visibility: visible;

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