import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import styled, { css } from "styled-components"

const Tags = ({ tags }) => (
  <TagsList>
    {tags.map(tag => (
      <Tag key={tag}>{tag}</Tag>
    ))}
  </TagsList>
)

export default Tags

const TagsList = styled.ul`
  margin-bottom: var(--s-5);
  display: flex;
  flex-wrap: wrap;
`

const Tag = styled.li`
  background-color: ${props =>
    props.theme.isDark ? "#2d3335" : "var(--color-bg-secondary)"};
  border-radius: 40px;
  padding: 2px 12px;
  margin-right: var(--s-1);
  font-size: var(--s-4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin-top: var(--s-2);
`
