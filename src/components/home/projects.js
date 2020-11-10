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
          tags = project.filterTags,
          hasTag = tag => tag.toLowerCase().includes(searchTerm)

    return projectTitle.includes(searchTerm) || tags.some(hasTag)
  }

  return (
  <Container bgAccent section>
    <Container wrapper>
      <Title>My Recent Projects</Title>

      <Search 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />

      <ProjectsContainer>
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
      </ProjectsContainer>

    </Container>
  </Container>
  )
}

export default Projects

const Title = styled.h2`
  text-align: center;
`

const Search = styled.input`
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: var(--s-7);
  padding: var(--s-0) var(--s-3);
`

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--s-11);
`
