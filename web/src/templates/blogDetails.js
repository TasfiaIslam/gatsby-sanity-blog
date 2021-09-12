import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogDetails = () => {
  const data = useStaticQuery(graphql`
    query GetSingleBlog($slug: String) {
      sanityBlogPost(slug: { current: { eq: $slug } }) {
        name
        description
        id
        image {
          asset {
            url
          }
        }
        sponsor {
          name
          url
        }
        body {
          children {
            text
          }
        }
      }
    }
  `)

  const blog = data.sanityBlogPost

  return (
    <Layout>
      <div className="w-4/6 flex justify-start">
        <div className="">
          Blog Detail
          <h1>{blog.name}</h1>
          <img
            className="h-80 w-96 object-cover"
            src={blog.image.asset.url}
            alt={blog.name}
          />
          {blog.body.map(item => (
            <div>
              {item.children.map(child => (
                <p className="text-justify my-4">{child.text}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogDetails
