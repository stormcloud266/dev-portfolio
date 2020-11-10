import React from "react"
import { Container } from "@styles"
import styled, { css } from "styled-components"
import { Code } from '@images/icons'
import dots from '@images/dots.svg'

const Cards = () => (
  <CardsContainer>
    <CardsInner section wrapper>
      <Card>
        <Code />
        <h3>Hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error, ullam officia.</p>
      </Card>

      <Card>
        <Code />
        <h3>Hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error, ullam officia.</p>
      </Card>

      <Card>
        <Code />
        <h3>Hello</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error, ullam officia.</p>
      </Card>
    </CardsInner>
  </CardsContainer>
)

export default Cards

const CardsContainer = styled.div`
  background-image: linear-gradient(120deg, #B1EDE8, #4de6da);
`

const CardsInner = styled(Container)`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`

const Card = styled.div`
  background-color: var(--color-bg);
  flex: 1;
  margin-right: var(--s-8);
  padding: var(--s-11) var(--s-8);
  /* box-shadow: 0px 3px 20px -2px rgba(0, 0, 0, 0.3); */
  border-radius: 4px;
  position: relative;
  border: 2px solid #5B3C68;
  box-shadow: 6px 6px 0 -2px #5B3C68;

  ${props => props.theme.isDark && css`
    border: 1px solid var(--color-cta);
    box-shadow: 6px 6px 0 -2px var(--color-cta);
  `}

  svg {
    stroke: #4de6da;
    margin-bottom: var(--s-6);
  }

  ${props => props.theme.isDark && css`
      svg {
        stroke: #B1EDE8;
      }
  `}

  h3 {
    margin-bottom: var(--s-6);
  }

  p {
    line-height: 2;
  }

  :last-child {
    margin-right: 0;
  }

  ::before {
    position: absolute;
    content: '';
    display: block;
    top: 2px;
    right: 2px;
    height: 70px;
    width: 140px;
    background-image: url(${dots});
    background-size: 70px;
    /* z-index: -1; */
    opacity: .7;
  }
`