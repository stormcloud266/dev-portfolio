import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Fade } from "@animations"
import { Container, Button } from "@styles"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query HomeProjects {
      allContentfulCaseStudy(
        limit: 6
        sort: { fields: last_updated, order: DESC }
        filter: { featured_study: { eq: true } }
      ) {
        edges {
          node {
            title
            slug
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
    <Container bgAccent section>
      <Container wrappers fcc>
        <Fade>
          <Title>Recent Projects</Title>
        </Fade>

        <Grid>
          {data.allContentfulCaseStudy.edges.map(({ node }) => {
            console.log("node: ", node)
            return (
              <ProjectLink
                to={`projects/${node.slug}`}
                key={node.slug}
                aria-label={`Go to ${node.title} project.`}
              >
                <ProjectImage image={getImage(node.portfolio_image)} alt="" />
              </ProjectLink>
            )
          })}
        </Grid>

        <ButtonContainer>
          <Fade y={20}>
            <Button as={Link} to="/projects">
              View All Projects
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
  margin-bottom: var(--s-12);
  font-size: var(--s-12);

  @media screen and (max-width: 61.25em) {
    font-size: var(--s-10);
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  max-width: 172rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 61.25em) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjectLink = styled(Link)`
  border: 1px solid;
  border-color: ${props =>
    props.theme.isDark ? "var(--color-gray-medium)" : "#bdcbd4"};
  transition: border 0.2s, border-color 0.2s, box-shadow 0.2s;
  background-color: ${props =>
    props.theme.isDark ? "var(--color-cta)" : "var(--color-purple)"};

  :hover {
    border-color: var(--color-purple);
    box-shadow: ${props =>
      props.theme.isDark
        ? "5px 5px 0 -2px var(--color-cta)"
        : "5px 5px 0 -2px var(--color-purple)"};

    border-color: ${props =>
      props.theme.isDark ? "var(--color-cta)" : "var(--color-purple)"};
  }
`

const ProjectImage = styled(GatsbyImage)`
  height: 30rem;
  transition: opacity 0.2s;

  ${ProjectLink}:hover & {
    opacity: 0.5;
  }

  @media screen and (max-width: 61.25em) {
    height: 26rem;
  }

  @media screen and (max-width: 40em) {
    height: 20rem;
  }
`
