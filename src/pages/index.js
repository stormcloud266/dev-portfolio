import React from "react"

import Layout from "@global/layout"
import Seo from "@global/seo"
import Hero from "@components/home/hero"
import Projects from "@components/home/projects"
import Cards from "@components/home/cards"
import Toolbelt from "../components/home/toolbelt"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />

      <Hero />
      <Toolbelt />
      <Projects />
      <Cards />
    </Layout>
  )
}

export default IndexPage
