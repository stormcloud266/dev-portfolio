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
