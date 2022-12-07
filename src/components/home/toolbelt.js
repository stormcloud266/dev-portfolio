import React from "react"
import { Container } from "@styles"
import styled from "styled-components"
import { Fade } from "@animations"
import dots from "@images/dots.svg"
import { ArrowRight } from "../../assets/images/icons"

const list = [
  "React",
  "GatsbyJS",
  "NextJS",
  "RedwoodJS",
  "Typescript",
  "GraphQL",
  "SCSS",
  "PostCSS",
  "Tailwind",
  "Styled Components",
  "Framer Motion",
]

const Toolbelt = () => {
  return (
    <Dots>
      <Container wrapper wrapperSmOnMd section id="toolbelt">
        <Fade>
          <Title>The Toolbelt</Title>
        </Fade>

        <Flex>
          <FlexItem>
            <Fade>
              <Text>
                Past. Present. Future. Stack. Honed in on CSS and semantic HTML.
              </Text>
              <Text>
                Moved to React mostly focusing on static sites and blogs for SMB
                clients.
              </Text>
              <Text>Fontend dev RedwoodJS, GraphQL, Tailwind</Text>
            </Fade>
          </FlexItem>
          <FlexItem>
            <FlexList>
              <Fade y={10}>
                <List>
                  {list.map(item => (
                    <ListItem>
                      <ArrowRight />
                      {item}
                    </ListItem>
                  ))}
                </List>
              </Fade>
            </FlexList>
          </FlexItem>
        </Flex>
      </Container>
    </Dots>
  )
}

export default Toolbelt

const Title = styled.h2`
  margin-bottom: 2rem;

  @media screen and (max-width: 61.25em) {
    font-size: var(--s-10);
  }
`
const Flex = styled.div`
  display: flex;
  gap: 4rem;

  @media screen and (max-width: 61.25em) {
    flex-direction: column;
    margin-bottom: var(--s-6);
  }
`

const FlexItem = styled.div`
  flex: 1;
`

const FlexList = styled.div`
  display: flex;
  justify-content: center;
`
const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.2rem;
`

const Text = styled.p`
  margin-top: var(--s-4);
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  svg {
    color: var(--color-cta);
    margin-right: 0.4rem;
  }
`

const Dots = styled.div`
  position: relative;

  ::before {
    position: absolute;
    content: "";
    display: block;
    bottom: -28px;
    left: 2px;
    height: 105px;
    width: 210px;
    background-image: url(${dots});
    background-size: 70px;
    opacity: 0.4;
  }
`
