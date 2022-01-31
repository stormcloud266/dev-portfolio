import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container } from "@styles"
import { Fade } from "@animations"
import Search from "@global/search"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsProjects {
      allMarkdownRemark(sort: { order: ASC, fields: frontmatter___order }) {
        edges {
          node {
            frontmatter {
              slug
              title
              excerpt
              display_tags
              filter_tags
              featured_image {
                childImageSharp {
                  gatsbyImageData(
                    width: 750
                    quality: 100
                    placeholder: BLURRED
                  )
                }
              }
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
