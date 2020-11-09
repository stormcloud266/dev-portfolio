import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "@styles"
import Project from "@components/home/projectCard"

import projects from '../../data/projects'

const Projects = () => {

  const [search, setSearch] = useState('')

  const filterProjects = project => {

    const searchTerm = search.toLowerCase().trim(),
          projectTitle = project.title.toLowerCase(),
          projectTags = project.tags,
          hasTag = tag => tag.toLowerCase().includes(searchTerm)

    return projectTitle.includes(searchTerm) || projectTags.some(hasTag)
  }

  return (
  <Container wrapper>
    <h2>Projects</h2>
    <input 
      type="text" 
      value={search} 
      onChange={(e) => setSearch(e.target.value)}
    />

    {
      projects
        .filter(project => filterProjects(project) )
        .map(project => (
          <Project 
            key={project.title}
            title={project.title}
            tags={project.tags}
          />
        ))
    }

  </Container>
  )
}

export default Projects
