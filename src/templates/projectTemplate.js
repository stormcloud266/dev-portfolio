import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "@components/global/layout"
import { Container, Button } from "@styles"
import Tags from "@components/global/tags"
import { LinkIcon, Github } from "@images/icons"

const IndexPage = ({ data }) => {
  const {
    title,
    display_tags,
    featured_image,
    live_link,
    github_link,
  } = data.project.frontmatter

  const { html } = data.project

  return (
    <Layout>
      <Container wrapper section>
        <Img fluid={featured_image.childImageSharp.fluid} />

        <InfoContainer>
          <Title>{title}</Title>

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
        </InfoContainer>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export default IndexPage

const LinksContainer = styled.div`
  display: flex;
  margin: var(--s-4) 0;

  ${Button} {
    padding: var(--s-2) var(--s-4);
    margin-right: var(--s-6);
    display: flex;
    align-items: center;
    line-height: 1;
    text-transform: unset;
  }

  svg {
    margin-right: var(--s-1);
  }
`
const InfoContainer = styled.div`
  padding: var(--s-9) 0;
  margin-bottom: var(--s-9);
  border-bottom: 1px solid;
  border-color: ${props => (props.theme.isDark ? "#454b4e" : "#bdcbd4")};
`
const Title = styled.h1``

export const query = graphql`
  query getCaseStudy($slug: String!) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        live_link
        github_link
        display_tags
        featured_image {
          childImageSharp {
            fluid(maxWidth: 750, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
