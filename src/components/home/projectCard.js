import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import ex from "@images/ex.png"

const Project = ({ title, tags }) => (
  <Card to="/">
    <Image />
    <Text>
      <Title>{title}</Title>
      <Tags>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, at
        unde? Soluta.
      </p>
    </Text>
  </Card>
)

export default Project

const Card = styled(Link)`
  border-radius: 4px;
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid;
  border-color: ${props => (props.theme.isDark ? "#485052" : "#bdcbd4")};
  transition: color 0s, border 0.2s, border-color 0.2s, box-shadow 0.2s;
  font-size: var(--s-5);
  overflow: hidden;

  :hover {
    color: var(--color-text);
    border: 1px solid;
    border-color: var(--color-purple);
    box-shadow: 6px 6px 0 -2px var(--color-purple);

    ${props =>
      props.theme.isDark &&
      css`
        border-color: var(--color-cta);
        box-shadow: 6px 6px 0 -2px var(--color-cta);
      `}
  }
`

const Image = styled.div`
  background-image: url(${ex});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 17rem;
`
const Text = styled.div`
  padding: var(--s-8) var(--s-7);
`

const Title = styled.h3`
  /* margin-bottom: var(--s-2); */
`

const Tags = styled.div`
  margin-bottom: var(--s-5);
  display: flex;
  flex-wrap: wrap;

  span {
    background-color: var(--color-bg-secondary);
    border-radius: 40px;
    padding: 2px 12px;
    margin-right: var(--s-1);
    font-size: var(--s-4);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    margin-top: var(--s-2);
  }
`
