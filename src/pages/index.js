import * as React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "../hooks/use-site-metadata";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  const { title, description } = useSiteMetadata();
  return (
    <main style={pageStyles}>
      <link rel="me" href="https://github.com/tensorglitch" />
      <title>Home Page</title>
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  )
}

export default IndexPage
