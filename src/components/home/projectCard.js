import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"

const Project = ({ title, tags }) => (
  <Card>
    <h3>{title}</h3>

    <Tags>
      {
        tags.map(tag => <span key={tag}>{tag}</span>)
      }
    </Tags>
    
  </Card>
)

export default Project

const Card = styled.div`
  flex: 1;
  max-width: 49%;
  border-radius: 4px;
  padding: var(--s-9) var(--s-7);

  border: 2px solid #5B3C68;
  box-shadow: 6px 6px 0 -2px #5B3C68;

  ${props => props.theme.isDark && css`
    border: 2px solid var(--color-cta);
    box-shadow: 6px 6px 0 -2px var(--color-cta);
  `}
`

const Tags = styled.div`
  span {
    background-color: #B1EDE8;
    border-radius: 40px;
    padding: 4px var(--s-6);
    margin-right: var(--s-1);
    font-size: var(--s-5);
    /* text-transform: uppercase; */
    letter-spacing: .5px;
  }
`