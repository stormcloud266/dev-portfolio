import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "@components/global/layout"
import { Container, Button, Blog } from "@styles"
import Tags from "@components/global/tags"
import Overview from "@components/projectPage/overview"
import DevicesImage from "@components/projectPage/devicesImage"
import { LinkIcon, Github } from "@images/icons"
import Hero from "@global/hero"

const ProjectTemplate = ({ data }) => {
  const {
    title,
    intro_text,
    display_tags,
    hero_image,
    live_site_url,
    github_link,
    motivation_header,
    motivation_body,
    solution_header,
    solution_body,
    multi_device_image,
  } = data.project

  return (
    <Layout>
      <Hero title={title} smText spacer />

      <Header wrapper>
        <InfoContainer>
          <LinksContainer>
            {live_site_url && (
              <Button
                primary
                as="a"
                href={live_site_url}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon /> Visit Live Site
              </Button>
            )}

            {github_link && (
              <Button
                as="a"
                href={github_link}
                target="_blank"
                rel="noreferrer"
              >
                <Github /> View on Github
              </Button>
            )}
          </LinksContainer>

          <Tags tags={display_tags.list} />
          <Excerpt>{intro_text.intro_text}</Excerpt>
        </InfoContainer>
        <Image
          image={getImage(hero_image)}
          imgStyle={{
            objectPosition: "top center",
          }}
          alt={`Home page for ${title}`}
        />
      </Header>

      <Overview
        motivation_header={motivation_header}
        motivation_body={motivation_body}
        solution_header={solution_header}
        solution_body={solution_body}
      />

      <DevicesImage image={multi_device_image} />

      {/* 
      <Container bgAccent>
        <Container wrapper wrapperSm sectionSm>
          <Blog dangerouslySetInnerHTML={{ __html: html }} />
        </Container>
      </Container> */}
    </Layout>
  )
}

export default ProjectTemplate

const Header = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 68.75em) {
    margin-bottom: 0;
    flex-direction: column-reverse;
    padding-top: var(--s-11);
    padding-bottom: var(--s-11);
    align-items: center;
  }
`

const Image = styled(GatsbyImage)`
  border-radius: 6px;
  width: 100%;
  max-width: 600px;
  height: 360px;
  transform: translateY(-40%);
  border: 1px solid var(--color-gray-medium);
  box-shadow: 6px 6px 0 -2px var(--color-gray-medium);

  @media screen and (max-width: 68.75em) {
    transform: translateY(0);
  }

  @media screen and (max-width: 36.25em) {
    height: 260px;
  }
`

const LinksContainer = styled.div`
  display: flex;
  margin: var(--s-8) 0 var(--s-7);

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
  padding-right: var(--s-8);
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
    project: contentfulCaseStudy(slug: { eq: $slug }) {
      title
      role
      intro_text {
        intro_text
      }
      display_tags {
        list
      }
      motivation_header
      motivation_body {
        raw
      }
      solution_header
      solution_body {
        raw
      }
      final_result_body {
        raw
      }
      live_site_url
      github_link
      hero_image {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 1000
          placeholder: TRACED_SVG
          quality: 100
        )
      }
      multi_device_image {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 1000
          placeholder: TRACED_SVG
          quality: 100
        )
      }
      final_result_image {
        file {
          url
        }
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 100)
      }
      screenshot_gallery {
        file {
          url
        }
        gatsbyImageData(
          layout: CONSTRAINED
          width: 700
          placeholder: BLURRED
          quality: 100
        )
      }
    }
  }
`
