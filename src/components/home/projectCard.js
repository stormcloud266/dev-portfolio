import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import ex from '@images/ex.png'

const Project = ({ title, tags }) => (
  <Card to="/">
    <Image />
    <Text>
      <Title>{title}</Title>
      <Tags>{tags.map(tag => <span key={tag}>{tag}</span>)}
      </Tags>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, at unde? Soluta.</p>
    </Text>
  </Card>
)

export default Project

const Card = styled(Link)`
  border-radius: 4px;
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid #bdcbd4;
  transition: all .2s;
  font-size: var(--s-5);
  overflow: hidden;

  :hover {
    transform: translateY(-3px);
    border: 1px solid #5B3C68;
    box-shadow: 6px 6px 0 -2px #5B3C68;
  }

  /* border: 2px solid #5B3C68;
  box-shadow: 6px 6px 0 -2px #5B3C68;

  ${props => props.theme.isDark && css`
    border: 2px solid var(--color-cta);
    box-shadow: 6px 6px 0 -2px var(--color-cta);
  `} */
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
    letter-spacing: .5px;
    display: block;
    margin-top: var(--s-2);
  }
`