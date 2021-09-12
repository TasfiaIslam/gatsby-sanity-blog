/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allSanityBlogPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            description
            _id
            name
            sponsor {
              name
              url
            }
            body {
              children {
                text
              }
            }
            image {
              asset {
                url
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const blogs = result.data.allSanityBlogPost.edges || []
  blogs.forEach((edge, index) => {
    const path = `/blogs/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/blogDetails.js"),
      context: { slug: edge.node.slug },
    })
  })
}
