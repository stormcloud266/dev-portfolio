import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "@components/global/layout"

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
      <section className="wrapper section" style={{ marginTop: "80px" }}>
        <Img fluid={featured_image.childImageSharp.fluid} />
        <h1>{title}</h1>
        <a href={live_link} target="_blank" rel="noreferrer">
          Live Site
        </a>
        <a href={github_link} target="_blank" rel="noreferrer">
          View project on github
        </a>
        <ul>
          {display_tags.map(label => (
            <li>{label}</li>
          ))}
        </ul>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  )
}

export default IndexPage

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
