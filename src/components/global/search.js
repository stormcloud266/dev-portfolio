import React, { useState } from "react"

import styled from "styled-components"
import NoResults from "@components/home/noResults"
import { Input } from "@styles"
import Project from "@components/global/projectCard"
import { CircleX } from "@images/icons"

const Search = ({ projects }) => {
  const [search, setSearch] = useState("")

  const filterProjects = project => {
    const searchTerm = search.toLowerCase().trim()
    const projectTitle = project.title.toLowerCase()
    const tags = project.filterTags

    const hasTag = tag => tag.toLowerCase().includes(searchTerm)

    return projectTitle.includes(searchTerm) || tags.some(hasTag)
  }

  const filteredProjects = projects.filter(project => filterProjects(project))

  return (
    <>
      <SearchContainer>
        <SearchInput
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
    </>
  )
}

export default Search

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 40rem;
  margin-top: var(--s-7);
`

const SearchInput = styled(Input)`
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
`