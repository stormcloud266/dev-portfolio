import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container } from "@styles"
import { Fade } from "@animations"
import Search from "@global/search"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsProjects {
      allContentfulCaseStudy(sort: { last_updated: DESC }) {
        edges {
          node {
            title
            slug
            intro_text {
              intro_text
            }
            display_tags {
              list
            }
            filter_tags {
              list
            }
            portfolio_image {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 1000
                placeholder: BLURRED
                quality: 100
              )
            }
          }
        }
      }
    }
  `)

  return (
    <Container bgAccent sectionSm>
      <Container wrapper fcc>
        <Fade>
          <Title>Search Projects</Title>
        </Fade>

        <Search data={data} />
      </Container>
    </Container>
  )
}

export default Projects

const Title = styled.h2`
  margin-bottom: var(--s-4);
  font-size: var(--s-11);

  @media screen and (max-width: 61.25em) {
    font-size: var(--s-10);
  }
`
