import React from "react"
import { Container } from "@styles"
import styled from "styled-components"
import { Fade } from "@animations"
import dots from "@images/dots.svg"
import { ArrowRight } from "../../assets/images/icons"

const list = [
  "GatsbyJS",
  "NextJS",
  "RedwoodJS",
  "Typescript",
  "GraphQL",
  "NodeJS",
  "Web3",
  "Solidity",
  "SCSS",
  "PostCSS",
  "Tailwind",
  "Styled Components",
  "Framer Motion",
  "Postgres",
]

const Toolbelt = () => {
  return (
    <Dots>
      <Container wrapper wrapperSmOnMd section id="toolbelt">
        <Fade>
          <Title>My Tool Belt</Title>
        </Fade>

        <Flex>
          <FlexItem>
            <Fade>
              <Text>
                I started my journey as a professional front-end developer by
                doing freelance work for SMB clients. This consisted of
                designing conversion-focused and intuitive UIs, implementing
                on-page SEO, and developing static websites and blogs powered by
                headless content management systems.
              </Text>
              <Text>
                Later on I began working more in the web3 space as a freelancer
                and a contractor. Some responsibilities included front-end work
                on a mobile app, integrating the OpenSea API into NextJS sites,
                and building landing pages with custom animations.
              </Text>
              <Text>
                Currently, I work at Infinity Keys building unique digital
                challenges and interfacing with smart contracts. I've built API
                routes, implemented auth solutions, published an NPM package,
                and used GraphQL to interact with Postgres.
              </Text>
            </Fade>
          </FlexItem>
          <FlexItem>
            <FlexList>
              <Fade y={10}>
                <List>
                  {list.map(item => (
                    <ListItem key={item}>
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

const Text = styled.p`
  margin-top: var(--s-4);
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.2rem;
  margin-top: var(--s-4);
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-family: var(--font-header);
  font-weight: 900;
  color: var(--color-text-primary);

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
