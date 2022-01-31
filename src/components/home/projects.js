import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Fade } from "@animations"
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
    <Container bgAccent section>
      <Container wrapper fcc>
        <Title>Recent Projects</Title>

        <Search data={data} />

        <ButtonContainer>
          <Fade y={20}>
            <Button as={Link} to="/projects">
              All Projects
            </Button>
          </Fade>
        </ButtonContainer>
      </Container>
    </Container>
  )
}

export default Projects

const ButtonContainer = styled.div`
  margin-top: var(--s-11);
`

const Title = styled.h2`
  margin-bottom: var(--s-4);
  font-size: var(--s-11);

  @media screen and (max-width: 61.25em) {
    font-size: var(--s-10);
  }
`
