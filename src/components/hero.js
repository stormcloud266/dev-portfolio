import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Button } from "@styles"

const Hero = () => (
  <HomeHero>
    <Container wrapper>
      <Text>

        <h1>Hello and Welcome to my website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis amet impedit molestiae assumenda. Vel distinctio error exercitationem dolor odit, architecto iure?</p>

        <ButtonContainer>  
          <Button primary as={Link} to="/about">Contact Me</Button>
          <Button as={Link} to="/about">See My Work</Button>
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
`

const Text = styled.div`

  max-width: 60ch;
  h1 {
    margin-bottom: var(--s-5);
  }

  p {
    margin-bottom: var(--s-8);
  }

  ${Button} {
    margin-right: var(--s-8);
  }
`

const ButtonContainer = styled.div`

`