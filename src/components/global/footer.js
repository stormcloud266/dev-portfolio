import React from "react"
import { Link } from "gatsby"
import { Container } from "@styles"
import styled from "styled-components"
import { Github, Codepen, Twitter, Mail } from "@images/icons"

const Footer = () => (
  <Container bgAccent as="footer">
    <FooterInner wrapper>
      <Flex>
        <h3>Tawnee</h3>
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
      </Flex>

      <Legal>Copyright &copy; 2020 - {new Date().getFullYear()}</Legal>

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

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Social = styled.div`
  display: flex;
  margin-left: var(--s-9);

  a {
    display: block;
    margin-right: var(--s-4);
    padding: 4px;
    border-radius: 3px;
    transition: all 0.2s;
    color: ${props => (props.theme.isDark ? "var(--color-black)" : "#fff")};
    background-color: ${props =>
      props.theme.isDark ? "var(--color-cta)" : "var(--color-black)"};
    :hover {
      background-color: ${props =>
        props.theme.isDark ? "#fff" : "var(--color-cta)"};
      color: var(--color-black);
    }
  }
  svg {
    display: block;
  }
`

const Legal = styled.p`
  font-size: var(--s-4);
  text-transform: uppercase;
`

const Nav = styled.nav`
  a {
    margin-right: var(--s-8);
    color: var(--color-text);
    font-family: "Yantramanav", sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
  }
`
