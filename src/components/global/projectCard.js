import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled, { css } from "styled-components"
import Tags from "@components/global/tags"

const Project = ({ title, tags, excerpt, slug, image }) => (
  <Card to={`/projects${slug}`}>
    <CoverImage>
      <GatsbyImage image={getImage(image)} alt="" />
    </CoverImage>
    <Text>
      <Title>{title}</Title>
      <Tags tags={tags} />
      <p>{excerpt}</p>
    </Text>
  </Card>
)

export default Project

const Card = styled(Link)`
  border-radius: 6px;
  background-color: var(--color-bg);
  color: var(--color-text);
  border: 1px solid;
  border-color: ${props => (props.theme.isDark ? "transparent" : "#bdcbd4")};
  transition: color 0s, border 0.2s, border-color 0.2s, box-shadow 0.2s;
  font-size: var(--s-5);
  overflow: hidden;
  max-width: 54rem;

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

const CoverImage = styled.div`
  overflow: hidden;
  height: 22rem;
  border-bottom: 1px solid var(--color-bg-secondary);
`
const Text = styled.div`
  padding: var(--s-8) var(--s-7);
`

const Title = styled.h3``
