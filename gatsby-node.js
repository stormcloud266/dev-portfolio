// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       projects: allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   const projects = data.projects.edges

//   projects.forEach(edge => {
//     const slug = edge.node.frontmatter.slug

//     actions.createPage({
//       path: `projects${slug}`,
//       component: require.resolve(`./src/templates/projectTemplate.js`),
//       context: { slug: slug },
//     })
//   })
// }

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      resources: allContentfulResource {
        edges {
          node {
            slug
          }
        }
      }
      studies: allContentfulCaseStudy {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // const resources = data.resources.edges

  // resources.forEach((edge) => {
  // 	const slug = edge.node.slug
  // 	actions.createPage({
  // 		path: `resources/${slug}`,
  // 		component: require.resolve(`./src/templates/resourcesTemp.js`),
  // 		context: { slug: slug },
  // 	})
  // })

  const studies = data.studies.edges

  studies.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `projects/${slug}`,
      component: require.resolve(`./src/templates/projectTemplate.js`),
      context: { slug: slug },
    })
  })
}
