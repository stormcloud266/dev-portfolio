import React from "react"
import { Container } from "@styles"
import styled from "styled-components"
import { Code, Palette } from "@images/icons"
import { Fade } from "@animations"
import dots from "@images/dots.svg"
import { useCurrentWidth } from "@hooks"

const Cards = () => {
  const width = useCurrentWidth()

  return (
    <CardsContainer id="about">
      <CardsInner section wrapper>
        {data.map(({ icon, title, description }, i) => (
          <CardContainer x={-20} delay={width > 980 ? i * 0.3 : 0} key={i}>
            <Card>
              {icon}
              <h3>{title}</h3>
              <p>{description}</p>
            </Card>
          </CardContainer>
        ))}
      </CardsInner>
    </CardsContainer>
  )
}

export default Cards

const data = [
  {
    icon: <Palette />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error, ullam officia.",
  },
  {
    icon: <Code />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error, ullam officia.",
  },
  {
    icon: <Code />,
    title: "Hello",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,dolorem. Perspiciatis aspernatur sunt impedit aliquid quos fuga error, ullam officia. lksdj lasdkj ladkj ladkjs sd",
  },
]

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

const CardContainer = styled(Fade)`
  flex: 1;
  margin-right: var(--s-8);
  max-width: 54rem;

  :last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 61.25em) {
    margin-right: 0;
    margin-bottom: var(--s-8);
  }
`

const Card = styled.div`
  height: 100%;
  background-color: var(--color-bg);
  padding: var(--s-11) var(--s-8);
  border-radius: 6px;
  position: relative;
  border: 1px solid;
  border-color: ${props =>
    props.theme.isDark ? "var(--color-cta)" : "var(--color-purple)"};
  box-shadow: 6px 6px 0 -2px ${props => (props.theme.isDark ? "var(--color-cta)" : "var(--color-purple)")};

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
