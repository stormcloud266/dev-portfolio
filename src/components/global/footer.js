import React from "react"
import { Link } from "gatsby"
import { Container } from "@styles"
import styled from "styled-components"
import { Logo } from "@images/icons"
import { navLinks, socialLinks } from "@data"

const Footer = ({ isDark }) => (
  <Container bgAccent as="footer">
    <FooterInner wrapper>
      <Flex>
        <LogoContainer>
          <Logo isDark={isDark} />
        </LogoContainer>
        <Social>
          {socialLinks.map(({ href, icon, label }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              key={label}
            >
              {icon}
            </a>
          ))}
        </Social>
      </Flex>

      <Legal>Copyright &copy; 2020 - {new Date().getFullYear()}</Legal>

      <Nav>
        {navLinks.map(({ text, href }) => (
          <Link to={href} key={text}>
            {text}
          </Link>
        ))}
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

  @media screen and (max-width: 61.25em) {
    flex-direction: column;
    align-items: center;
    padding-top: var(--s-8);
    padding-bottom: var(--s-8);
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 61.25em) {
    order: 2;
    margin: var(--s-8) 0;
  }
  @media screen and (max-width: 25em) {
    flex-direction: column;
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
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

  @media screen and (max-width: 25em) {
    margin: var(--s-8) 0 0;
  }
`

const LogoContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  svg {
    height: 2rem;
    display: block;
  }
`

const Legal = styled.p`
  font-size: var(--s-4);
  text-transform: uppercase;

  @media screen and (max-width: 61.25em) {
    order: 3;
  }
`

const Nav = styled.nav`
  a {
    margin-right: var(--s-8);
    color: var(--color-text);
    font-family: var(--font-header);
    font-weight: bold;
    letter-spacing: 1px;
    transition: color 0.2s;

    :last-child {
      margin-right: 0;
    }

    :hover {
      color: var(--color-cta);
    }
  }

  @media screen and (max-width: 61.25em) {
    order: 1;
  }
`
