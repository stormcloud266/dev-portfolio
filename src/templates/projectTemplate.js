import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "@components/global/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <section className="wrapper section" style={{ marginTop: "300px" }}>
      {data.project.frontmatter.title}
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query getCaseStudy($slug: String!) {
    project: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
    }
  }
`
