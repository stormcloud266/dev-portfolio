import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "@styles"
import Search from "@global/search"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsProjects {
      allMarkdownRemark {
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
    <Container bgAccent sectionSm>
      <Container wrapper fcc>
        <h2>Search Projects</h2>

        <Search data={data} />
      </Container>
    </Container>
  )
}

export default Projects
