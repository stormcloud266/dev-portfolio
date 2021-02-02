import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "@components/global/layout"

const IndexPage = ({ data }) => {
  // const { title, filter_labels, image } = data.project.frontmatter
  const { html } = data.project
  return (
    <Layout>
      <section className="wrapper section" style={{ marginTop: "300px" }}>
        <h1>title</h1>
        {console.log(data)}
        {/* <Img fluid={image.childImageSharp.fluid} /> */}
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
      }
      html
    }
  }
`
