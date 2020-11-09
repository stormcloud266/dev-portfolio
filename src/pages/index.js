import React from "react"

import Layout from "@global/layout"
import SEO from "@global/seo"
import Hero from "@components/home/hero"
import Projects from "@components/home/projects"

const IndexPage = () => {

  return (
    <Layout>
  
      <SEO title="Home" />

      <Hero />
  
      <section className="wrapper section">
        <Projects />
      </section>
  
    </Layout>
  )
}

export default IndexPage
