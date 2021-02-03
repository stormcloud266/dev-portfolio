import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "@components/global/layout"
import { Container, Button, Blog } from "@styles"
import Tags from "@components/global/tags"
import { LinkIcon, Github } from "@images/icons"
import Hero from "@global/hero"

const ProjectTemplate = ({ data }) => {
  const {
    title,
    excerpt,
    display_tags,
    featured_image,
    live_link,
    github_link,
  } = data.project.frontmatter

  const { html } = data.project

  return (
    <Layout>
      <Hero title={title} spacer />

      <Header wrapper>
        <InfoContainer>
          <LinksContainer>
            <Button
              primary
              as="a"
              href={live_link}
              target="_blank"
              rel="noreferrer"
            >
              <LinkIcon /> Visit Live Site
            </Button>

            <Button as="a" href={github_link} target="_blank" rel="noreferrer">
              <Github /> View on Github
            </Button>
          </LinksContainer>

          <Tags tags={display_tags} />
          <Excerpt>{excerpt}</Excerpt>
        </InfoContainer>
        <Image
          fluid={featured_image.childImageSharp.fluid}
          imgStyle={{
            objectPosition: "top center",
          }}
        />
      </Header>

      <Container bgAccent>
        <Container wrapper wrapperSm sectionSm>
          <Blog dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Container>
    </Layout>
  )
}

export default ProjectTemplate

const Header = styled(Container)`
  display: flex;
  justify-content: space-between;
  margin-bottom: -7rem;

  @media screen and (max-width: 68.75em) {
    margin-bottom: 0;
    flex-direction: column-reverse;
    padding-top: var(--s-11);
    padding-bottom: var(--s-11);
    align-items: center;
  }
`

const Image = styled(Img)`
  border-radius: 6px;
  width: 100%;
  max-width: 600px;
  height: 360px;
  transform: translateY(-50%);
  border: 1px solid var(--color-purple);
  box-shadow: 6px 6px 0 -2px var(--color-purple);
  @media screen and (max-width: 68.75em) {
    transform: translateY(0);
  }

  @media screen and (max-width: 36.25em) {
    height: 260px;
  }
`

const LinksContainer = styled.div`
  display: flex;
  margin: var(--s-8) 0 var(--s-5);

  ${Button} {
    padding: var(--s-4) var(--s-7);
    text-transform: unset;
    :first-child {
      margin-right: var(--s-7);
    }
  }

  svg {
    margin-right: var(--s-1);
  }

  @media screen and (max-width: 36.25em) {
    flex-direction: column;
    max-width: 22rem;

    ${Button}:first-child {
      margin-right: 0;
      margin-bottom: var(--s-4);
    }
  }
`
const InfoContainer = styled.div`
  padding: var(--s-9) var(--s-9) 0 0;
  @media screen and (max-width: 68.75em) {
    padding: 0;
  }
`
const Excerpt = styled.p`
  max-width: 56rem;
  padding-top: var(--s-3);
`

export const query = graphql`
  query getCaseStudy($slug: String!) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        excerpt
        live_link
        github_link
        display_tags
        featured_image {
          childImageSharp {
            fluid(maxWidth: 950, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
