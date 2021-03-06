import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogs from "../components/blogs"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hello!!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <Blogs /> */}
  </Layout>
)

export default IndexPage
