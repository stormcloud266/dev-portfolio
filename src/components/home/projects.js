import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, Button } from "@styles"
import Search from "@global/search"
import projects from "../../data/projects"

const Projects = () => {
  const limitedProjects = projects.slice(0, 6)

  return (
    <Container bgAccent section>
      <Container wrapper fcc>
        <h2>My Recent Projects</h2>

        <Search projects={limitedProjects} />

        <ButtonMargin as={Link} to="/projects">
          All Projects
        </ButtonMargin>
      </Container>
    </Container>
  )
}

export default Projects

const ButtonMargin = styled(Button)`
  margin-top: var(--s-11);
`
