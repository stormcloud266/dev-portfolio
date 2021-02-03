import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "@components/global/layout"
import { Container, Button } from "@styles"
import Tags from "@components/global/tags"
import BlockTitle from "@components/global/blockTitle"
import { LinkIcon, Github } from "@images/icons"

const IndexPage = ({ data }) => {
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
      <Hero>
        <Container wrapper>
          <BlockTitle>{title}</BlockTitle>
          <Image fluid={featured_image.childImageSharp.fluid} />
        </Container>
      </Hero>

      <Container wrapper>
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
          <p>{excerpt}</p>
        </InfoContainer>

        <Container wrapper wrapperSm>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Container>
    </Layout>
  )
}
export default IndexPage

const Image = styled(Img)`
  border-radius: 6px;
  width: 100%;
  max-width: 560px;
  height: 400px;
  transform: translateY(50%);
`

const LinksContainer = styled.div`
  display: flex;
  margin: var(--s-7) 0 var(--s-8);

  ${Button} {
    padding: var(--s-4) var(--s-7);
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

const Hero = styled.section`
  min-height: 40rem;
  background-color: #48175d;
  background-image: linear-gradient(
    120deg,
    #f784ae,
    #d4a5ec,
    #a1c6ff,
    #90defb,
    #b1ede8
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5.5rem;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
