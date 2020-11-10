import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { Container, Button } from "@styles"
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
    <Container wrapper fcc>
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

      <Button as={Link} to="/projects">View All Projects</Button>

    </Container>
  </Container>
  )
}

export default Projects

const Title = styled.h2`
  /* text-align: center; */
`

const Search = styled.input`
  margin-top: var(--s-7);
  padding: var(--s-0) var(--s-3);
  border: 2px solid var(--color-black);
  
  :focus {
    border: 2px solid var(--color-cta);
    border-radius: 0;
    outline: 0;
  }
`

const ProjectsContainer = styled.div`
  display: grid;
  gap: var(--s-7);
  grid-template-columns: repeat(3, 1fr);
  margin-top: var(--s-11);
  margin-bottom: var(--s-11);
`

