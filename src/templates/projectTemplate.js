import React from "react"
import { graphql } from "gatsby"
import Layout from "@components/global/layout"
import Header from "@components/projectPage/header"
import Overview from "@components/projectPage/overview"
import DevicesImage from "@components/projectPage/devicesImage"
import Process from "@components/projectPage/process"
import Challenges from "@components/projectPage/challenges"
import Hero from "@global/hero"

const ProjectTemplate = ({ data }) => {
  const {
    title,
    intro_text,
    display_tags,
    hero_image,
    live_site_url,
    github_link,
    motivation_header,
    motivation_body,
    solution_header,
    solution_body,
    multi_device_image,
    process_body,
    process_list,
    challenges_list,
  } = data.project

  return (
    <Layout>
      <Hero title={title} smText spacer />

      <Header
        site_url={live_site_url}
        github_link={github_link}
        tags={display_tags.list}
        intro={intro_text.intro_text}
        image={hero_image}
        title={title}
      />

      <Overview
        motivation_header={motivation_header}
        motivation_body={motivation_body}
        solution_header={solution_header}
        solution_body={solution_body}
      />

      <DevicesImage image={multi_device_image} />
      <Process body={process_body} list={process_list.list} />
      <Challenges list={challenges_list.list} />
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query getCaseStudy($slug: String!) {
    project: contentfulCaseStudy(slug: { eq: $slug }) {
      title
      live_site_url
      github_link
      intro_text {
        intro_text
      }
      display_tags {
        list
      }
      hero_image {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 1000
          placeholder: TRACED_SVG
          quality: 100
        )
      }
      motivation_header
      motivation_body {
        raw
      }
      solution_header
      solution_body {
        raw
      }
      multi_device_image {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 1000
          placeholder: TRACED_SVG
          quality: 100
        )
      }
      process_body {
        raw
      }
      process_list {
        list
      }
      challenges_list {
        list
      }
      screenshot_gallery {
        file {
          url
        }
        gatsbyImageData(
          layout: CONSTRAINED
          width: 700
          placeholder: BLURRED
          quality: 100
        )
      }
    }
  }
`
