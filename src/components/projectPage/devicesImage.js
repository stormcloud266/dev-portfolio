import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container } from "@styles"
import { Fade } from "@animations"

const DevicesImage = ({ image }) => {
  return (
    <Gradient section>
      <Fade y={15}>
        <Container wrapper>
          <Image image={getImage(image)} alt="" />
        </Container>
      </Fade>
    </Gradient>
  )
}

export default DevicesImage

const Gradient = styled(Container)`
  background-image: linear-gradient(
    120deg,
    #f784ae,
    #d4a5ec,
    #a1c6ff,
    #90defb,
    #b1ede8
  );
`
const Image = styled(GatsbyImage)`
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`
