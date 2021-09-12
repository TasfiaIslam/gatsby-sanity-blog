import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Movies from "../components/movies"

const MoviePage = () => (
  <Layout>
    <Seo title="Movies" />
    <h1>Movies</h1>
    <p>View all movies</p>
    <Movies />
  </Layout>
)

export default MoviePage
