import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "@components/layout"
import SEO from "@components/seo"

import projects from '../data/projects'

import { Button } from "../styles/button"


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

      <h1>Hello and Welcome To My Website</h1>
      <h2>This Is My Secondary Headline</h2>
      <h3>This Is My Secondary Headline</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium mollitia sit, voluptatem est earum iste! Velit ratione nam neque, qui odit delectus tempora eveniet quaerat, sint similique minus molestias unde ut error!</p>
      <Button primary>This My Button</Button>
      <Button>This My Button</Button>
      <Button as={Link}>This My Link</Button>
  
    </Layout>
  )
}

export default IndexPage
