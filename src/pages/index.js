import React from "react"

import Layout from "@global/layout"
import Seo from "@global/seo"
import Hero from "@components/home/hero"
import About from "@components/home/about"
import Projects from "@components/home/projects"
import Cards from "@components/home/cards"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <Hero />
      <About />
      <Projects />
      <Cards />
    </Layout>
  )
}

export default IndexPage
