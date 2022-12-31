import React from "react"
import styled from "styled-components"
import { Container } from "@styles"
import BlockTitle from "@components/global/blockTitle"

const Hero = ({ title, spacer, smText }) => {
  return (
    <StyledHero>
      <Container wrapper>
        <BlockTitle smText={smText}>{title}</BlockTitle>
        {spacer && <Spacer />}
      </Container>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.section`
  min-height: 48rem;
  background-image: var(--color-gradient);
  display: flex;
  align-items: center;
  padding-top: 5.5rem;
  background-color: #8378ff;
  background-image: radial-gradient(ellipse at 60% 10%, #f784ae, transparent),
    radial-gradient(ellipse at bottom right, #90defb, transparent),
    radial-gradient(ellipse at bottom left, #90defb, transparent);

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 61.25em) {
    min-height: 38rem;
  }
  @media screen and (max-width: 36.25em) {
    min-height: 34rem;
  }
`

const Spacer = styled.div`
  width: 100%;
  max-width: 620px;
  @media screen and (max-width: 68.75em) {
    display: none;
  }
`
