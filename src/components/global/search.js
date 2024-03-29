import React, { useState } from "react"
import styled from "styled-components"
import NoResults from "@components/home/noResults"
import { Input } from "@styles"
import { Fade } from "@animations"
import Project from "@components/global/projectCard"
import { CircleX } from "@images/icons"

const Search = ({ data }) => {
  const [search, setSearch] = useState("")

  const projects = data.allContentfulCaseStudy.edges.map(project => {
    const {
      title,
      slug,
      portfolio_image,
      intro_text,
      filter_tags,
      display_tags,
    } = project.node

    return {
      title,
      excerpt: intro_text.intro_text,
      slug,
      image: portfolio_image,
      filterTags: filter_tags.list,
      tags: display_tags.list,
    }
  })

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
        <Fade>
          <SearchInput
            type="text"
            placeholder="Search by Name or Tag"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Fade>

        {search && (
          <Delete onClick={() => setSearch("")}>
            <Fade inline duration={0.1} style={{ display: "block" }}>
              <CircleX />
            </Fade>
          </Delete>
        )}
      </SearchContainer>

      {filteredProjects.length > 0 ? (
        <ProjectsContainer>
          {filteredProjects.map((project, i) => (
            <Project
              key={project.title}
              title={project.title}
              excerpt={project.excerpt}
              tags={project.tags}
              slug={project.slug}
              image={project.image}
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
  margin-top: var(--s-13);
  @media screen and (max-width: 61.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 42.5em) {
    grid-template-columns: repeat(1, 1fr);
  }
`
