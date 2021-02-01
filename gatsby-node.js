exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      projects: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const projects = data.projects.edges
  console.log("projects: ", projects)

  projects.forEach(edge => {
    console.log("edge: ", edge)
    const slug = edge.node.frontmatter.slug
    console.log("slug: ", slug)

    actions.createPage({
      path: `projects${slug}`,
      component: require.resolve(`./src/templates/projectTemplate.js`),
      context: { slug: slug },
    })
  })
}
