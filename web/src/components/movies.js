import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Movies = () => {
  const data = useStaticQuery(graphql`
    query GetAllMovies {
      allSanityMovie {
        edges {
          node {
            id
            title
            poster {
              asset {
                url
                altText
                gatsbyImageData(
                  width: 300
                  height: 200
                  formats: PNG
                  fit: FILL
                )
              }
            }
          }
        }
      }
    }
  `)

  const allMovies = data.allSanityMovie.edges

  return (
    <>
      <div>Movies</div>
      {allMovies.map(movie => (
        <div key={movie.node.id}>
          {/* {console.log(1, movie)} */}
          <h3>{movie.node.title}</h3>
          <img
            src={movie.node.poster.asset.url}
            alt={movie.node.poster.asset.altText}
            className="w-64 h-80 object-fit"
          />
          {/* <GatsbyImage
            image={getImage(movie.node.poster)}
            alt={movie.node.poster.asset.altText}
          /> */}
        </div>
      ))}
    </>
  )
}

export default Movies
