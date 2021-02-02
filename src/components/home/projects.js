import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import { Container, Button } from "@styles"
import Search from "@global/search"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(limit: 6) {
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

  const projects = data.allMarkdownRemark.edges.map(project => {
    const {
      title,
      excerpt,
      slug,
      featured_image,
      filter_tags,
      display_tags,
    } = project.node.frontmatter

    return {
      title,
      excerpt,
      slug,
      image: featured_image,
      filterTags: filter_tags,
      tags: display_tags,
    }
  })

  console.log("projects: ", projects)

  return (
    <Container bgAccent section>
      <Container wrapper fcc>
        <h2>My Recent Projects</h2>

        <Search projects={projects} />

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
