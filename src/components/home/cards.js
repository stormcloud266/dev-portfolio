import React from "react"
import { Container } from "@styles"
import styled from "styled-components"
import { Code } from "@images/icons"
import dots from "@images/dots.svg"

const Cards = () => (
  <CardsContainer id="about">
    <CardsInner section wrapper>
      <Card>
        <Code />
        <h3>Hello</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error,
          ullam officia.
        </p>
      </Card>

      <Card>
        <Code />
        <h3>Hello</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error,
          ullam officia.
        </p>
      </Card>

      <Card>
        <Code />
        <h3>Hello</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error,
          ullam officia.
        </p>
      </Card>
    </CardsInner>
  </CardsContainer>
)

export default Cards

const CardsContainer = styled.div`
  background-image: linear-gradient(
    120deg,
    #f784ae,
    #d4a5ec,
    #a1c6ff,
    #90defb,
    #b1ede8
  );
`

const CardsInner = styled(Container)`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 61.25em) {
    flex-direction: column;
    align-items: center;
  }
`

const Card = styled.div`
  background-color: var(--color-bg);
  flex: 1;
  margin-right: var(--s-8);
  padding: var(--s-11) var(--s-8);
  border-radius: 6px;
  position: relative;
  border: 1px solid;
  border-color: ${props =>
    props.theme.isDark ? "var(--color-cta)" : "var(--color-purple)"};
  box-shadow: 6px 6px 0 -2px ${props => (props.theme.isDark ? "var(--color-cta)" : "var(--color-purple)")};
  max-width: 54rem;

  @media screen and (max-width: 61.25em) {
    margin-right: 0;
    margin-bottom: var(--s-8);
  }

  svg {
    stroke: var(--color-blue);
    margin-bottom: var(--s-6);
  }

  h3 {
    margin-bottom: var(--s-6);
  }

  p {
    line-height: 1.8;
  }

  :last-child {
    margin-right: 0;
  }

  ::before {
    position: absolute;
    content: "";
    display: block;
    top: 2px;
    right: 2px;
    height: 70px;
    width: 140px;
    background-image: url(${dots});
    background-size: 70px;
    opacity: 0.7;
  }
`
