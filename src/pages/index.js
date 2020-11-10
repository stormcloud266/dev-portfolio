import React from "react"

import Layout from "@global/layout"
import SEO from "@global/seo"
import Hero from "@components/home/hero"
import Projects from "@components/home/projects"
import Cards from "@components/home/cards"

const IndexPage = () => {

  return (
    <Layout>
  
      <SEO title="Home" />

      <Hero />
  
      <Projects />

      <Cards />
  
    </Layout>
  )
}

export default IndexPage
