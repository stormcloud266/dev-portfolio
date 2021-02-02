import React from "react"
import styled from "styled-components"
import Layout from "@global/layout"
import SEO from "@global/seo"
import Projects from "@components/projects/projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Title>My Projects</Title>
      </Hero>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage

const Hero = styled.section`
  min-height: 40rem;
  background-color: #48175d;
  background-image: linear-gradient(120deg, #f784ae, #48175d);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5.5rem;
`

const Title = styled.h1`
  color: white;
`
