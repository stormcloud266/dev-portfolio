import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled, { css } from "styled-components"

const Nav = ({ isOpen }) => {

  return (
    <StyledNav isOpen={isOpen}>

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

    </StyledNav>
  )
}

export default Nav

const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    background-color: var(--color-black);

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
    color: #fff;
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