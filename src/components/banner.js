import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      konzelCreative: file(
        relativePath: { eq: "konzel-creative-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="main-image">
        <div className="main-text">Tanglez Hair Salon</div>
        <Img fluid={data.konzelCreative.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default Banner
