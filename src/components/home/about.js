import React from "react"
import { Container } from "@styles"
import styled from "styled-components"
import { Fade } from "@animations"
import dots from "@images/dots.svg"
import { useCurrentWidth } from "@hooks"
import { ArrowRight } from "../../assets/images/icons"

const list = [
  "React",
  "GatsbyJS",
  "NextJS",
  "RedwoodJS",
  "SCSS",
  "PostCSS",
  "Tailwind",
  "Styled Components",
  "Framer Motion",
]

const About = () => {
  const width = useCurrentWidth()

  return (
    <Container wrapper section>
      <Title>The Toolbelt</Title>

      <Flex>
        <FlexItem>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            quibusdam mollitia blanditiis vel quasi. Alias maiores voluptatum,
            ea accusantium similique libero? Vitae recusandae fugiat facilis
            dolor, cum repellat sed ea.
          </p>
        </FlexItem>
        <FlexItem>
          <FlexList>
            <List>
              {list.map(item => (
                <ListItem>
                  <ArrowRight />
                  {item}
                </ListItem>
              ))}
            </List>
          </FlexList>
        </FlexItem>
      </Flex>
    </Container>
  )
}

export default About

const Title = styled.h2`
  margin-bottom: 2rem;
`
const Flex = styled.div`
  display: flex;
  gap: 4rem;
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

const ListItem = styled.li`
  display: flex;
  align-items: center;
  svg {
    color: var(--color-cta);
    margin-right: 0.4rem;
  }
`
