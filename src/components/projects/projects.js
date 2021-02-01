import React from "react"

import { Container, Button } from "@styles"
import Search from "@global/search"
import projects from "../../data/projects"

const Projects = () => {
  return (
    <Container bgAccent sectionSm>
      <Container wrapper fcc>
        <h2>Search Projects</h2>

        <Search projects={projects} />
      </Container>
    </Container>
  )
}

export default Projects
