import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import { Container, Button } from "@styles"
import Search from "@global/search"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query HomeProjects {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___order }
        limit: 6
      ) {
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
                  fluid(maxWidth: 750, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container bgAccent section>
      <Container wrapper fcc>
        <h2>My Recent Projects</h2>

        <Search data={data} />

        <ButtonMargin as={Link} to="/projects">
          All Projects
        </ButtonMargin>
      </Container>
    </Container>
  )
}

export default Projects

const ButtonMargin = styled(Button)`
  margin-top: var(--s-11);
`
