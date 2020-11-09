import React from "react"
import { Link } from "gatsby"
import { Container } from "@styles"
import styled from "styled-components"

const Footer = () => (
  <Container bgAccent as="footer">
    <FooterInner wrapper>

      <h3>Tawnee</h3>

      <Nav>
        <Link to="/">Home</Link>
        <Link to="/">Projects</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </Nav>

    </FooterInner>
  </Container>
)

export default Footer

const FooterInner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: var(--s-4);
  padding-bottom: var(--s-4);
`

const Nav = styled.nav`
  a {
    margin-left: 3rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`