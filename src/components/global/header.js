import React, { useState } from "react"
import { Link } from "gatsby"
import Nav from '@global/Nav'
import { Hamburger, Times, Logo } from '@images/icons'

import styled from "styled-components"
import { Container } from "@styles"

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
  
        <Nav isOpen={isOpen} />
  
      </NavContainer>
    </SiteHeader>
  )
}

export default Header

const SiteHeader = styled.header`
  background-color: var(--color-black);

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