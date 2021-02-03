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
`
