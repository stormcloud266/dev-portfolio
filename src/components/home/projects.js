import React, { useState } from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import NoResults from "@components/home/noResults"
import { Container, Button, Input } from "@styles"
import Project from "@components/home/projectCard"
import { CircleX } from "@images/icons"
import projects from "../../data/projects"

const Projects = () => {
  const [search, setSearch] = useState("")

  const filterProjects = project => {
    const searchTerm = search.toLowerCase().trim(),
      projectTitle = project.title.toLowerCase(),
      tags = project.filterTags,
      hasTag = tag => tag.toLowerCase().includes(searchTerm)

    return projectTitle.includes(searchTerm) || tags.some(hasTag)
  }

  const filteredProjects = projects.filter(project => filterProjects(project))

  return (
    <Container bgAccent section>
      <Container wrapper fcc>
        <h2>My Recent Projects</h2>

        <SearchContainer>
          <Search
            type="text"
            placeholder="Search by Name or Tag"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          {search && (
            <Delete onClick={() => setSearch("")}>
              <CircleX />
            </Delete>
          )}
        </SearchContainer>

        {filteredProjects.length > 0 ? (
          <ProjectsContainer>
            {filteredProjects.map(project => (
              <Project
                key={project.title}
                title={project.title}
                tags={project.tags}
              />
            ))}
          </ProjectsContainer>
        ) : (
          <NoResults />
        )}

        <Button as={Link} to="/projects">
          View All Projects
        </Button>
      </Container>
    </Container>
  )
}

export default Projects

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  margin-top: var(--s-7);
`

const Search = styled(Input)`
  padding-right: 3.2rem;
`

const Delete = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.8rem;
  cursor: pointer;
  padding: 1px;
  display: block;

  svg {
    display: block;
    stroke: var(--color-text);
  }
`

const ProjectsContainer = styled.div`
  display: grid;
  gap: var(--s-7);
  grid-template-columns: repeat(3, 1fr);
  margin-top: var(--s-11);
  margin-bottom: var(--s-11);
`
