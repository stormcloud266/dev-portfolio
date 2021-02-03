import React from "react"
import styled from "styled-components"
import { Container } from "@styles"
import BlockTitle from "@components/global/blockTitle"

const Hero = ({ title, spacer }) => {
  return (
    <StyledHero>
      <Container wrapper>
        <BlockTitle>{title}</BlockTitle>
        {spacer && <Spacer />}
      </Container>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.section`
  min-height: 44rem;
  background-image: var(--color-gradient);
  display: flex;
  align-items: center;
  padding-top: 5.5rem;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Spacer = styled.div`
  width: 100%;
  max-width: 620px;
`
