import React from "react"
import styled from "styled-components"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Container } from "@styles"
import { Fade } from "@animations"

const Overview = ({
  motivation_header,
  motivation_body,
  solution_header,
  solution_body,
}) => {
  return (
    <Container bgAccent section>
      <Container wrapper>
        <Section>
          <Label>
            <Fade x={-10} inline>
              The Motivation
            </Fade>
          </Label>
          <TextContainer>
            <Fade>
              <Title>{motivation_header}</Title>
            </Fade>
            <Fade delay={0.2}>{renderRichText(motivation_body)}</Fade>
          </TextContainer>
        </Section>

        <Section>
          <Label>
            <Fade x={-10} inline>
              The Solution
            </Fade>
          </Label>
          <TextContainer>
            <Fade>
              <Title>{solution_header}</Title>
            </Fade>
            <Fade delay={0.2}>{renderRichText(solution_body)}</Fade>
          </TextContainer>
        </Section>
      </Container>
    </Container>
  )
}

export default Overview

const Section = styled.div`
  display: flex;
  max-width: 104rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 40em) {
    flex-direction: column;
    border-left: 1px solid;
    border-color: ${props =>
      props.theme.isDark ? "var(--color-gray-medium)" : "#bdcbd4"};
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
`
const Label = styled.p`
  font-family: var(--font-header);
  font-weight: 700;
  text-align: right;
  flex-basis: 33.333%;
  border-right: 1px solid;
  border-color: ${props =>
    props.theme.isDark ? "var(--color-gray-medium)" : "#bdcbd4"};
  padding-top: 4rem;
  padding-right: 8rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  color: ${props => (props.theme.isDark ? "#839098" : "#5e717d")};

  &::before {
    content: "";
    display: block;
    height: 1.2rem;
    width: 1.2rem;
    background-color: ${props =>
      props.theme.isDark ? "var(--color-gray-medium)" : "#bdcbd4"};
    border-radius: 100%;

    position: absolute;
    top: 4.8rem;
    right: -0.6rem;
  }

  @media screen and (max-width: 61.25em) {
    padding-right: 4rem;
  }

  @media screen and (max-width: 40em) {
    text-align: left;
    border: none;
    padding-left: 2rem;

    &::before {
      right: unset;
      left: -0.6rem;
    }
  }
`
const TextContainer = styled.div`
  flex-basis: 66.666%;
  padding: 4rem 0 4rem 8rem;
  white-space: pre-line;

  p:not(:last-of-type) {
    margin-bottom: var(--s-7);
  }

  @media screen and (max-width: 61.25em) {
    padding: 4rem 0 4rem 4rem;
  }

  @media screen and (max-width: 40em) {
    padding: 3.2rem 0 2rem 2rem;
  }
`
const Title = styled.h2`
  font-size: var(--s-9);
  margin-top: -12px;
  margin-bottom: var(--s-7);
  line-height: 1.5;

  @media screen and (max-width: 61.25em) {
    font-size: var(--s-8);
    margin-top: -6px;
  }
`
