import React from "react"
import styled from "styled-components"
import { Fade } from "@animations"
import { Container } from "@styles"
import { CheckCircle } from "@images/icons"

const Challenges = ({ list }) => {
  return (
    <Container bgAccent section>
      <Container wrapper wrapperSmOnMd>
        <Fade>
          <Title>The Challenges</Title>
        </Fade>
        <Fade>
          <List>
            {list.map(item => (
              <ListItem key={item}>
                <CheckCircle />
                {item}
              </ListItem>
            ))}
          </List>
        </Fade>
      </Container>
    </Container>
  )
}

export default Challenges

const Title = styled.h2`
  margin-bottom: var(--s-13);
  text-align: center;

  @media screen and (max-width: 61.25em) {
    font-size: var(--s-10);
    margin-bottom: var(--s-10);
  }
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--s-10);
  row-gap: var(--s-10);

  @media screen and (max-width: 61.25em) {
    grid-template-columns: 1fr;
  }
`

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;

  svg {
    color: var(--color-cta);
    margin-right: var(--s-2);
    margin-top: 2px;
    display: block;
    flex-shrink: 0;
  }
`
