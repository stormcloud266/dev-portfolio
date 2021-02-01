import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import {
  Hamburger,
  Times,
  Sun,
  Moon,
  Github,
  Codepen,
  Twitter,
  Mail,
} from "@images/icons"

import styled, { css } from "styled-components"
import { Container } from "@styles"

const Header = ({ isDark, themeContext }) => {
  const [isOpen, toggleNav] = useState(false)

  /*
  Stops scroll when mobile nav open.
  Causes a jump if scrollbars are on 'show always'

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    if (!isOpen) {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])
  */

  return (
    <SiteHeader>
      <NavContainer wrapper>
        <LogoLink to="/">Tawnee.dev</LogoLink>

        <NavToggle id="nav-toggle" onClick={() => toggleNav(!isOpen)}>
          {isOpen ? <Times /> : <Hamburger />}
        </NavToggle>

        <Nav isOpen={isOpen}>
          <NavLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/examples">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </NavLinks>

          <ThemeToggle
            onClick={() => themeContext.toggleDark()}
            aria-label="toggle dark mode"
          >
            {isDark ? <Sun /> : <Moon />}
          </ThemeToggle>

          <Social>
            <a href="/">
              <Github />
            </a>
            <a href="/">
              <Codepen />
            </a>
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <Mail />
            </a>
          </Social>
        </Nav>
      </NavContainer>
    </SiteHeader>
  )
}

export default Header

const SiteHeader = styled.header`
  background-color: var(--color-bg);
  border-bottom: 2px solid var(--color-cta);

  // positioning
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;

  svg {
    stroke: var(--color-text);
  }
`
const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ThemeToggle = styled.button`
  border: none;
  padding: 0.1rem;
  line-height: 1;
  background-color: transparent;

  svg {
    display: block;
  }
`

const NavToggle = styled.button`
  display: none;

  svg {
    display: block;
  }

  @media screen and (max-width: 900px) {
    display: block;
    // overwrite default button styles
    border: none;
    padding: 0.5rem;
    line-height: 1;
    background-color: transparent;
    cursor: pointer;

    // positioning
    display: block;
    position: relative;
    z-index: 1000;
  }
`

const LogoLink = styled(Link)`
  padding: 1.2rem 0;
  position: relative;
  z-index: 1000;

  svg {
    fill: var(--color-text);
    width: 100%;
    max-width: 13rem;
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
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;

    // flex
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // transition set up
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s;

    // set up styles before transition
    li {
      opacity: 0;
      transform: translateY(1rem);
    }

    svg {
      opacity: 0;
      transition: opacity 0s;
    }

    ${props =>
      props.isOpen &&
      css`
        opacity: 1;
        visibility: visible;

        svg {
          opacity: 1;
          transition: opacity 0.5s;
        }

        // needs to be kept here due to parent props
        li {
          transform: translateY(0);
          opacity: 1;
          transition: opacity 0.2s, transform 0.2s;

          &:nth-child(1) {
            transition-delay: 0.1s;
          }
          &:nth-child(2) {
            transition-delay: 0.15s;
          }
          &:nth-child(3) {
            transition-delay: 0.2s;
          }
          &:nth-child(4) {
            transition-delay: 0.25s;
          }
          &:nth-child(5) {
            transition-delay: 0.3s;
          }
        }
      `}// end of isOpen
  }
`

const NavLinks = styled.ul`
  display: flex;

  li {
    margin-right: var(--s-8);
  }
  a {
    color: var(--color-text);
    font-family: "Yantramanav", sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
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
      padding: 0.4rem 0.8rem;
    }
  }
`

const Social = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: flex;
    margin-top: var(--s-8);

    a {
      display: block;
      margin-right: var(--s-7);
      :last-child {
        margin-right: 0;
      }
    }

    svg {
      display: block;
      height: 2.4rem;
      width: 2.4rem;
    }
  }
`
