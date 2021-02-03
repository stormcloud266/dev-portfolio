import React from "react"
import styled from "styled-components"

const BlockTitle = ({ children, wide }) => (
  <Container wide={wide}>
    <Title>{children}</Title>
  </Container>
)

export default BlockTitle

const Container = styled.div`
  max-width: ${props => (props.wide ? "68rem" : "50rem")};
  margin: 0 1.7rem;
`

const Title = styled.h1`
  color: white;
  font-size: 5.4rem;
  text-transform: uppercase;
  display: inline;
  background-color: var(--color-black);
  margin-bottom: 90px;
  box-decoration-break: clone;
  line-height: 1.8;
  box-shadow: -7px 0 0 10px var(--color-black), 7px 0 0 10px var(--color-black);
  text-shadow: 2px 2px var(--color-cta);

  @media screen and (max-width: 61.25em) {
    font-size: 4rem;
    text-shadow: 1.5px 1.5px var(--color-cta);
    line-height: 2;
  }

  @media screen and (max-width: 25em) {
    font-size: 3.2rem;
    text-shadow: 1px 1px var(--color-cta);
    line-height: 2.2;
  }
`
