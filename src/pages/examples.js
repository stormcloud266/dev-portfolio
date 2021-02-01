import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import Layout from "@global/layout"
import SEO from "@global/seo"
import StaticQuery from "@components/staticQuery"

const IndexPage = ({ data, location }) => (
  <Layout>
    <SEO
      title="Home"
      description="My example description"
      url={location.href}
      imageUrl={"https://url.to/image.png"}
    />

    <h1 style={{ margin: "400px 0" }}>Examples</h1>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    image: file(relativePath: { eq: "frank-mckenna.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
