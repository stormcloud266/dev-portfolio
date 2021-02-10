import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Button } from "@styles"
import dots from "@images/dots.svg"
import BlockTitle from "@components/global/blockTitle"

const Hero = () => (
  <HomeHero>
    <Dots />
    <BG />
    <Container wrapper>
      <Text>
        <BlockTitle wide>
          I'm Tawnee and I'm a Front End Web Developer
        </BlockTitle>
        <ButtonContainer>
          <Button primary={1} as={Link} to="/about">
            Contact Me
          </Button>
          <Button as={Link} to="/about">
            See My Work
          </Button>
        </ButtonContainer>
      </Text>
    </Container>
  </HomeHero>
)

export default Hero

const HomeHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: hidden;

  /* #f784ae,
    #d4a5ec,
    #a1c6ff,
    #90defb,
    #b1ede8 */
  background-color: #8378ff;
  background-image: radial-gradient(ellipse at 60% -20%, #f784ae, transparent),
    radial-gradient(ellipse at bottom right, #90defb, transparent),
    radial-gradient(ellipse at bottom left, #90defb, transparent);
`

const Text = styled.div`
  /* max-width: 60ch; */

  ${Button} {
    min-width: 18rem;
    border-color: var(--color-black);

    :first-child {
      margin-right: var(--s-8);
    }
  }
`
const ButtonContainer = styled.div`
  margin-top: var(--s-8);
`
const BG = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  z-index: -1;
  transform: skewX(-25deg);
  left: 60%;
`

const Dots = styled.div`
  position: absolute;
  content: "";
  display: block;
  bottom: 0;
  left: 0;
  height: 210px;
  width: 70px;
  background-image: url(${dots});
  background-size: 70px;
  z-index: -1;
`
