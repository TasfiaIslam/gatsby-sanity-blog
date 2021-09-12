import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogs from "../components/blogs"

const BlogPage = () => (
  <Layout>
    <Seo title="Blogs" />
    <h1>Blogs</h1>
    <p>Welcome to my blogs.</p>
    <Blogs />
  </Layout>
)

export default BlogPage
