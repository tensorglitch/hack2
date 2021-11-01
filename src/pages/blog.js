import * as React from "react"
import { graphql } from "gatsby"

// styles
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const headingAccentStyles = {
    color: "#663399",
}
const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
}
const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
}

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
}

const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
}

// export const query = graphql`
//   query($slug: String!) {
//     allWebmention(filter: { wm_slug: { eq: $slug } }) {
//         totalCount
//         edges {
//           node {
//             id
//             published
//             publishedFormated: published(formatString: "MMM Do, YYYY")
//             author {
//                 name
//                 photo
//                 url
//             }
//             url
//             wm_id
//             content {
//               html
//             }
//           }
//         }
//       }
//     }
// `

// markup
const BlogPage = ({ data, location }) => {
    const mentions = data.allWebmention
    return (
        <main style={pageStyles}>
            <title>Blog Page</title>
            <ol className="webmentions__list">
                {mentions.edges.map(edge => (
                    <div
                        key={edge.node.wm_id}
                        imageUrl={edge.node.author.photo}
                        authorUrl={edge.node.author.url}
                        authorName={edge.node.author.name}
                        dtPublished={edge.node.published}
                        dtPublishedFormated={edge.node.publishedFormated}
                        content={edge.node.content && edge.node.content.html}
                        url={edge.node.url}
                    />
                ))}
            </ol>
        </main>
    )
}

export default BlogPage
