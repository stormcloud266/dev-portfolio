import React from "react"

import Layout from "@global/layout"
import SEO from "@global/seo"
import Hero from "@global/hero"
import Projects from "@components/projects/projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero title="View My Latest Projects" />
      <Projects />
    </Layout>
  )
}

export default ProjectsPage
