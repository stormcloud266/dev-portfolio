import React from "react"
import styled from "styled-components"
import { Container } from "@styles"
import BlockTitle from "@components/global/blockTitle"

import Layout from "@global/layout"
import SEO from "@global/seo"
import Projects from "@components/projects/projects"

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <Container wrapper>
          <BlockTitle>View My Latest Projects</BlockTitle>
        </Container>
      </Hero>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage

const Hero = styled.section`
  min-height: 40rem;
  background-color: #48175d;
  background-image: linear-gradient(
    120deg,
    #f784ae,
    #d4a5ec,
    #a1c6ff,
    #90defb,
    #b1ede8
  );

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5.5rem;
`
