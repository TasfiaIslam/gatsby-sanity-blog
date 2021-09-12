import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "./layout"

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allSanityBlogPost {
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

  const allSanityBlogPost = data.allSanityBlogPost.edges

  return (
    <>
      {allSanityBlogPost.map(blog => (
        <div key={blog.node._id} className="my-20">
          <div>
            <Link
              to={"/blogs/" + blog.node.slug.current}
              key={blog.node.slug.current}
            >
              <h2 className="text-lg font-bold cursor-pointer">
                {blog.node.name}
              </h2>
            </Link>
            <p className="text-sm my-4">{blog.node.description}</p>
            <img
              className="h-64 w-80 object-cover"
              src={blog.node.image.asset.url}
              alt={blog.node.name}
            />
            {blog.node.body.map(item => (
              <div>
                {item.children.map(child => (
                  <p className="text-justify my-4">{child.text}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default Blogs
