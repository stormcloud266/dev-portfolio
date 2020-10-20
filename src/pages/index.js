import React, { useState } from "react"

import Layout from "@components/layout"
import SEO from "@components/seo"

import projects from '../data/projects'

const IndexPage = () => {

  const [search, setSearch] = useState('')

  const filterProjects = project => {

    const searchTerm = search.toLowerCase(),
          projectTitle = project.title.toLowerCase(),
          projectTags = project.tags,
          hasTag = tag => tag.toLowerCase().includes(searchTerm)

    return projectTitle.includes(searchTerm) || projectTags.some(hasTag)
  }

  return (
    <Layout>
  
      <SEO title="Home" />
  
      <section className="wrapper section">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

        {
          search ? projects.filter(project => filterProjects(project) )
            .map(project => <li key={project.title}>{project.title}</li>
            ) : (
            projects.map(project => <li key={project.title}>{project.title}</li> )
          )
        }
      </section>
  
    </Layout>
  )
}

export default IndexPage
