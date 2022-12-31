import React from "react"
import styled from "styled-components"
import { Fade } from "@animations"

const BlockTitle = ({ children, wide, smText }) => (
  <Container wide={wide}>
    <Fade duration={0.7}>
      <Title smText={smText}>{children}</Title>
    </Fade>
  </Container>
)

export default BlockTitle

const Container = styled.div`
  max-width: ${props => (props.wide ? "94rem" : "62rem")};
  margin: 0 1.7rem;
`

const Title = styled.h1`
  font-size: ${props => (props.smText ? "var(--s-10)" : "var(--s-12)")};

  color: white;
  text-transform: uppercase;
  display: inline;
  background-color: var(--color-black);
  background-color: #181a1b;
  box-decoration-break: clone;
  line-height: 2;
  box-shadow: -7px 0 0 10px #181a1b, 7px 0 0 10px #181a1b;
  text-shadow: 1.5px 1.5px var(--color-cta);

  @media screen and (max-width: 61.25em) {
    font-size: ${props => (props.smText ? "var(--s-10)" : "var(--s-11)")};
    text-shadow: 1.5px 1.5px var(--color-cta);
    line-height: 2;
  }

  @media screen and (max-width: 40em) {
    font-size: ${props => (props.smText ? "var(--s-8)" : "var(--s-9)")};
    text-shadow: 1px 1px var(--color-cta);
    line-height: 2.2;
  }

  @media screen and (max-width: 25em) {
    font-size: var(--s-9);
  }
`
